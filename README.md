<h1 align="center">🚌 Travelleasy - Karnataka Bus Ticket Booking</h1>

<p align="center">
  A clean, interactive frontend for booking intercity bus tickets across Karnataka.
  <br>
  <a href="https://travelleasy.vercel.app/ticket-booking" target="_blank"><strong>🌐 Live Demo →</strong></a>
</p>

---

## ✨ Overview

Travelleasy is a React-based frontend application designed for seamless bus ticket booking. It features a multi-step form, OTP verification, ticket generation with QR code, and PDF download. The interface is modern, responsive, and designed with user experience in mind.

---

## 🎥 Demo Preview

> 📌 [Live Project](https://travelleasy.vercel.app/ticket-booking)

Coming soon: GIF demo walkthrough of the booking flow and ticket generation 🎬

---

## 🚀 Features

- 🌆 Select source & destination cities from Karnataka
- 📅 Pick a travel date
- 📲 Phone number OTP verification
- 🔐 Secure booking with backend token validation
- 🧾 Generate & display ticket with unique QR code
- 📥 Download ticket as PDF (using `html2canvas` and `jsPDF`)
- 🌈 Clean & modern UI with glassmorphism design

---

## 🧱 Tech Stack

| Area        | Tools Used                             |
|-------------|----------------------------------------|
| Frontend    | React, HTML5, CSS3                     |
| HTTP Client | Axios                                  |
| PDF Tool    | jsPDF + html2canvas                    |
| Deployment  | Vercel                                 |
| Styling     | Custom CSS (glassmorphic UI)           |

---

## 📂 Folder Structure

Travelleasy/
├── public/
│ └── tb.webp # Background image
├── src/
│ ├── pages/
│ │ └── TicketBooking.jsx # Main booking component
│ └── TicketBooking.css # Styling for booking page
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🧪 API Requirements (Backend not included)

Although this is only the frontend, it integrates with a backend through these API endpoints:

| Endpoint          | Method | Description                    |
|-------------------|--------|--------------------------------|
| `/send-otp`       | POST   | Sends OTP to provided phone    |
| `/verify-otp`     | POST   | Verifies OTP                   |
| `/create-ticket`  | POST   | Creates ticket, returns QR     |

> ⚠️ Backend must be running at `http://localhost:3000` (or update the `API_BASE_URL` in `TicketBooking.jsx`).

---

## ⚙️ Installation & Usage

```bash
# 1. Clone the repo
git clone https://github.com/Abuosm/Travelleasy.git
cd Travelleasy

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
Then, visit: http://localhost:3000/ticket-booking

🖼️ Sample Ticket Output (with QR)
<img src="https://i.imgur.com/yoursample.png" alt="Ticket Preview" width="600" />
🌐 Deployment
The frontend is deployed using Vercel.

To deploy your own:

bash
Copy
Edit
vercel login
vercel --prod
✅ Ensure CORS and proper API endpoints are configured on your backend.

👨‍💻 Author
Abubakar Osman 
🚀 GitHub | 📧 abubakerosman56@gmail.com

📄 License
This project is open-source under the MIT License.
Feel free to use, modify, and distribute with credit.

❤️ Support
If you like this project, consider giving it a ⭐ on GitHub!
Have suggestions or want to collaborate? Open an issue or pull request.

