import React, { useState, useRef } from 'react';
import axios from 'axios';
import './TicketBooking.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const KARNATAKA_CITIES = [
  "Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", 
  "Gulbarga", "Davanagere", "Shimoga", "Bellary", "Udupi",
  "Hassan", "Mandya", "Tumkur", "Bidar", "Raichur",
  "Chitradurga", "Kolar", "Chikmagalur", "Karwar", "Bagalkot"
];

const COUNTRY_CODES = [
  { code: '+91', country: 'India' },
  { code: '+1', country: 'USA' },
  { code: '+44', country: 'UK' },
  { code: '+61', country: 'Australia' },
  { code: '+971', country: 'UAE' }
];

const API_BASE_URL = 'http://localhost:3000';

const TicketBooking = () => {
  const [step, setStep] = useState(1);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [localNumber, setLocalNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [message, setMessage] = useState('');
  const [ticketDetails, setTicketDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);
  const ticketRef = useRef(null);

  const sendOtp = async (fullPhoneNumber) => {
    if (!fullPhoneNumber) {
      setMessage("Phone number is required");
      return;
    }

    setIsLoading(true);
    setMessage("Sending OTP...");

    try {
      const response = await axios.post(`${API_BASE_URL}/send-otp`, { phoneNumber: fullPhoneNumber });
      if (response.data.success) {
        setOtpSent(true);
        setPhoneNumber(fullPhoneNumber);
        setMessage(response.data.message);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!verificationCode) {
      setMessage("Please enter the OTP.");
      return;
    }

    setIsLoading(true);
    setMessage("Verifying OTP...");

    try {
      const response = await axios.post(`${API_BASE_URL}/verify-otp`, {
        phoneNumber,
        otp: verificationCode
      });

      if (response.data.success) {
        setOtpVerified(true);
        setToken(response.data.token);
        setMessage("OTP verified successfully!");
        setStep(4);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!source || !destination || !phoneNumber || !bookingDate) {
      setMessage("Please fill all required fields.");
      return;
    }

    setIsLoading(true);
    setMessage("Processing ticket booking...");

    try {
      const config = token ? {
        headers: { Authorization: `Bearer ${token}` }
      } : {};

      const response = await axios.post(`${API_BASE_URL}/create-ticket`, {
        source,
        destination,
        phoneNumber,
        bookingDate
      }, config);

      if (response.data.success) {
        setTicketDetails(response.data.ticket);
        setMessage("Ticket booked successfully!");
        setStep(5);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const generatePDF = () => {
    const ticketElement = ticketRef.current;
    if (!ticketElement) return;

    html2canvas(ticketElement, {
      scale: 2,
      useCORS: true,
      allowTaint: true
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save(`bus_ticket_${ticketDetails.ticketId}.pdf`);
    });
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
    if (destination === e.target.value) setDestination('');
  };

  return (
    <div className="ticket-booking-page"
  style={{
    backgroundImage: "url('/tb.webp')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
>
      <h2>Karnataka Bus Ticket Booking</h2>

      <div className="progress-bar">
        {[1, 2, 3, 4, 5].map((stepNum) => (
          <div key={stepNum} className={`progress-step ${step >= stepNum ? 'active' : ''}`}>
            {stepNum}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="booking-card">
          <h3>Where are you traveling from?</h3>
          <select value={source} onChange={handleSourceChange} className="city-select">
            <option value="">Select departure city</option>
            {KARNATAKA_CITIES.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <h3>Select booking date</h3>
          <input
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            className="date-input"
          />

          <button onClick={() => setStep(2)} disabled={!source || !bookingDate} className="next-button">
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="booking-card">
          <h3>Where are you traveling to?</h3>
          <select value={destination} onChange={(e) => setDestination(e.target.value)} className="city-select">
            <option value="">Select arrival city</option>
            {KARNATAKA_CITIES.filter(city => city !== source).map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <button onClick={() => setStep(3)} disabled={!destination || destination === source} className="next-button">
            Next
          </button>
          {destination === source && source && (
            <p className="error-message">Destination cannot be same as source!</p>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="booking-card">
          <h3>Enter your phone number</h3>
          <div className="phone-input-group">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              disabled={otpSent}
              className="country-code-select"
            >
              {COUNTRY_CODES.map(({ code, country }) => (
                <option key={code} value={code}>{country} ({code})</option>
              ))}
            </select>

            <input
              type="tel"
              value={localNumber}
              onChange={(e) => setLocalNumber(e.target.value.replace(/\D/g, ''))}
              placeholder="Enter phone number"
              disabled={otpSent}
              className="phone-number-input"
            />
          </div>

          {!otpSent ? (
            <button
              onClick={() => {
                const fullPhone = `${countryCode}${localNumber}`;
                sendOtp(fullPhone);
              }}
              disabled={!localNumber || isLoading}
              className="action-button"
            >
              {isLoading ? 'Sending...' : 'Send OTP'}
            </button>
          ) : (
            <>
              <h3>Enter OTP</h3>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 6-digit OTP"
                className="otp-input"
                maxLength="6"
              />
              <button
                onClick={verifyOtp}
                disabled={!verificationCode || verificationCode.length !== 6 || isLoading}
                className="action-button"
              >
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </button>
            </>
          )}
        </div>
      )}

      {step === 4 && (
        <div className="booking-card">
          <h3>Book Your Ticket</h3>
          <button onClick={handleSubmit} disabled={isLoading} className="submit-button">
            {isLoading ? 'Booking...' : 'Book Ticket'}
          </button>
        </div>
      )}

      {step === 5 && ticketDetails && (
        <div className="booking-card">
          <h3>Ticket Booked Successfully!</h3>
          <div className="ticket-container" ref={ticketRef}>
            <div className="ticket-details">
              <div className="ticket-header">
                <h2>Karnataka State Bus Ticket</h2>
                <div className="ticket-id">Ticket ID: {ticketDetails.ticketId}</div>
              </div>
              <div className="ticket-body">
                <div className="route-info">
                  <div className="route-section">
                    <div className="label">From</div>
                    <div className="value">{ticketDetails.source}</div>
                  </div>
                  <div className="route-arrow">→</div>
                  <div className="route-section">
                    <div className="label">To</div>
                    <div className="value">{ticketDetails.destination}</div>
                  </div>
                </div>
                <div className="passenger-info">
                  <div className="info-row">
                    <div className="label">Phone Number:</div>
                    <div className="value">{ticketDetails.phoneNumber}</div>
                  </div>
                  <div className="info-row">
                    <div className="label">Date:</div>
                    <div className="value">{ticketDetails.bookingDate || bookingDate}</div>
                  </div>
                </div>
              </div>
              <div className="ticket-footer">
                <div className="qr-code-container">
                  {ticketDetails.qrCode && (
                    <img src={ticketDetails.qrCode} alt="QR Code" className="qr-code" />
                  )}
                  <div className="scan-text">Scan for verification</div>
                </div>
                <div className="terms">
                  <p>Terms & Conditions:</p>
                  <ul>
                    <li>Valid only for the date of journey</li>
                    <li>Non-transferable</li>
                    <li>Subject to Karnataka State Bus regulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button onClick={generatePDF} className="download-button">Download Ticket PDF</button>
        </div>
      )}

      {message && (
        <p className={`message ${message.toLowerCase().includes("success") ? "success" : "error"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default TicketBooking;
