import React from 'react';
import { Link } from 'react-router-dom';
import QRScanner from "./pwa/QRScanner";
import './home.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Transport Ticketing System</h1>
      <QRScanner />
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="home-page">
       <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">Travel Easy</Link>
        </div>
        <div className="navbar-right">
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
          <Link to="/qr-scanner" className="nav-link">Qr Verification</Link>

        </div>
      </nav>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Travel Easy</h1>
          <p>Experience seamless and secure travel with Aadhaar-based verification and QR code ticketing.</p>
          <div className="kannada-greeting" style={{marginBottom: '20px', fontStyle: 'italic'}}>
            <p>"ಸುಗಮವಾದ ಪ್ರಯಾಣಕ್ಕೆ ಸ್ವಾಗತ" (Welcome to comfortable journey)</p>
          </div>
          <Link to="/ticket-booking" className="cta-button">Book Your Ticket</Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Travel Easy?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Easy Booking</h3>
            <p>Book your tickets in just a few clicks. Our intuitive interface ensures a hassle-free experience.</p>
            <p className="kannada-text" style={{fontStyle: 'italic', marginTop: '10px'}}>"ಸುಲಭವಾದ ಬುಕಿಂಗ್" (Easy booking)</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Aadhaar Verification</h3>
            <p>Your safety is our priority. We use Aadhaar-based verification to ensure a secure and trusted booking process.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>QR Code Ticketing</h3>
            <p>No more paper tickets! Access your travel details instantly with a scannable QR code.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3>Real-Time Updates</h3>
            <p>Get real-time updates on your travel status, delays, and gate changes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Multi-Platform Access</h3>
            <p>Access your tickets and travel details on any device, anytime, anywhere.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌿</div>
            <h3>Eco-Friendly Travel</h3>
            <p>Contribute to a greener planet by reducing paper usage with digital ticketing.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon">1</div>
            <h3>Enter Your Details</h3>
            <p>Provide your travel details and verify your identity using Aadhaar.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">2</div>
            <h3>Secure Payment</h3>
            <p>Complete your booking with our secure payment gateway.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">3</div>
            <h3>Receive QR Code</h3>
            <p>Instantly receive a QR code ticket on your registered email and mobile.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">4</div>
            <h3>Travel with Ease</h3>
            <p>Scan your QR code at the boarding point and enjoy your journey.</p>
          </div>
        </div>
      </section>

      {/* Karnataka Travel Info Section */}
      <section className="features-section" style={{backgroundColor: '#f8f9fa'}}>
        <h2>Explore Karnataka with Ease</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🚌</div>
            <h3>KSRTC Services</h3>
            <p>Travel across Karnataka with Karnataka State Road Transport Corporation's premium services.</p>
            <p className="kannada-text" style={{fontStyle: 'italic', marginTop: '10px'}}>"ಕರ್ನಾಟಕದಾದ್ಯಂತ ಪ್ರಯಾಣಿಸಿ" (Travel across Karnataka)</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏙️</div>
            <h3>Bangalore Metro</h3>
            <p>Namma Metro connectivity across Bengaluru with seamless last-mile transport options.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⛰️</div>
            <h3>Hill Station Routes</h3>
            <p>Book tickets to Coorg, Chikmagalur, and other scenic hill stations of Karnataka.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏖️</div>
            <h3>Coastal Karnataka</h3>
            <p>Explore Mangaluru, Udupi, Karwar and other beautiful coastal destinations.</p>
            <p className="kannada-text" style={{fontStyle: 'italic', marginTop: '10px'}}>"ಸುಂದರ ಕರಾವಳಿ ಪ್ರದೇಶಗಳು" (Beautiful coastal areas)</p>
          </div>
        </div>
      </section>

      {/* Karnataka Tourism Highlights */}
      <section className="how-it-works-section">
        <h2>Must-Visit Places in Karnataka</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon">🏛️</div>
            <h3>Mysuru Palace</h3>
            <p>Experience the grandeur of Karnataka's royal heritage in the cultural capital.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">🗿</div>
            <h3>Hampi Ruins</h3>
            <p>Explore the UNESCO World Heritage Site of Vijayanagara Empire.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">☕</div>
            <h3>Coorg Plantations</h3>
            <p>Visit the coffee estates of Scotland of India.</p>
            <p className="kannada-text" style={{fontStyle: 'italic', marginTop: '10px'}}>"ಕಾಫಿ ತೋಟಗಳು" (Coffee plantations)</p>
          </div>
          <div className="step-card">
            <div className="step-icon">🕌</div>
            <h3>Gol Gumbaz</h3>
            <p>Marvel at the architectural wonder in Vijayapura with the world's second largest dome.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Travel Smart?</h2>
          <p>Join thousands of travelers who trust Travel Easy for their journey. Book your ticket now!</p>
          <div className="kannada-greeting" style={{marginBottom: '20px'}}>
            <p>"ಕರ್ನಾಟಕವನ್ನು ಅನ್ವೇಷಿಸೋಣ!" (Let's explore Karnataka!)</p>
          </div>
          <Link to="/ticket-booking" className="cta-button">Get Started</Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Travel Easy</h3>
            <p>Your trusted partner for seamless and secure travel.</p>
            <p>"ಸುರಕ್ಷಿತ ಮತ್ತು ಸುಗಮ ಪ್ರಯಾಣ" (Safe and smooth journey)</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/ticket-booking">Book Tickets</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: support@traveleasy.com</p>
            <p>Phone: +91 12345 67890</p>
            <p>Bangalore, Karnataka</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Travel Easy. All rights reserved.</p>
          <p>"ಧನ್ಯವಾದಗಳು" (Thank you)</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;