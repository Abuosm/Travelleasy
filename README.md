<h1 align="center">🚌 Travelleasy - Karnataka Bus Ticket Booking</h1>

<p align="center">
  A clean, interactive frontend for booking intercity bus tickets across Karnataka with OTP verification and QR code generation.
  <br>
  <a href="https://travelleasy.vercel.app" target="_blank"><strong>🌐 Live Demo →</strong></a>
</p>

---

## ✨ Overview

**Travelleasy** is a React-based frontend application designed for secure and seamless bus ticket booking. It features a multi-step booking form, OTP-based user verification, QR code ticket generation, and PDF download support. The UI is responsive, modern, and optimized for a smooth user experience.

---

## 🎥 Demo Preview

> 📌 [Live Demo](https://travelleasy.vercel.app)

### 🖼️ Screenshots

1. **Home Page**
   ![Screenshot-One](https://github.com/user-attachments/assets/02f022e1-412d-4cc1-bad6-b9326d137814)

2. **OTP Verification Screen**
   ![Screenshot-Two](https://github.com/user-attachments/assets/0c45f851-b681-45bb-baf4-87ddac205ace)

3. **Ticket Booking Form**
   ![Screenshot-Three](https://github.com/user-attachments/assets/92ce342d-a981-4f63-979a-5d1e103f94fe)

4. **Generated Ticket Preview**
   ![Screenshot-Four](https://github.com/user-attachments/assets/736ef89d-97d1-4a8d-ab4e-05b94351a264)

5. **Ticket Download Flow**
   ![Screenshot-Five](https://github.com/user-attachments/assets/d835e66f-5e01-4afe-8e23-98c50cdf3253)

---

## 🚀 Features

- 🗺️ Select source and destination cities across Karnataka
- 📆 Choose your travel date
- 📲 OTP-based phone verification (via Twilio)
- 🔐 Secure ticket booking with JWT validation
- 🧾 Ticket includes a unique QR code
- 📥 Download ticket as PDF (`html2canvas` + `jsPDF`)
- 💎 Beautiful glassmorphic UI (fully responsive)

---

## 🧱 Tech Stack

| Area        | Tools Used                             |
|-------------|----------------------------------------|
| Frontend    | React, HTML5, CSS3                     |
| HTTP Client | Axios                                  |
| PDF Tool    | jsPDF + html2canvas                    |
| Deployment  | Vercel                                 |
| Styling     | Custom CSS (glassmorphism theme)       |

---

## 🔌 Backend Integration

> ⚠️ You must have the backend running and connected for full functionality.

### API Requirements:

| Endpoint          | Method | Description                    |
|-------------------|--------|--------------------------------|
| `/send-otp`       | POST   | Send OTP to user phone number  |
| `/verify-otp`     | POST   | Verify OTP and return JWT      |
| `/create-ticket`  | POST   | Book ticket and return QR code |

> 🔧 Make sure to set the correct `API_BASE_URL` in `TicketBooking.jsx`:
```js
const API_BASE_URL = "https://travelleasy-backend.onrender.com";
⚙️ Installation & Usage (Development)
bash
Copy
Edit
# Clone the repository
git clone https://github.com/Abuosm/Travelleasy.git
cd Travelleasy

# Install dependencies
npm install

# Start development server
npm start
Then, open http://localhost:3000/ticket-booking in your browser.

🚀 Deployment
This frontend is deployed on Vercel.

To deploy your own version:

bash
Copy
Edit
vercel login
vercel --prod
Make sure your backend allows CORS and is reachable from the deployed domain.

👨‍💻 Author
Abubakar Osman Parsung
📧 abubakerosman56@gmail.com
🔗 GitHub

📄 License
This project is licensed under the MIT License.
You’re free to use, modify, and distribute — just give proper credit.

❤️ Support
If you found this project helpful:

⭐ Star the repo

🐛 Report bugs

💬 Suggest features

🤝 Contribute
