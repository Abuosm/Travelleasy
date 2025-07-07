<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="MIT License">
</div>

<h1 align="center">
  🚍 Travelleasy Karnataka
  <br>
  <span style="font-size: 0.8em;">Seamless Bus Ticket Booking for Karnataka</span>
</h1>

<p align="center">
  <a href="https://travelleasy.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/LIVE_DEMO-FF5722?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
  </a>
</p>

![App Screenshot](https://github.com/user-attachments/assets/02f022e1-412d-4cc1-bad6-b9326d137814)

## 🌟 Key Features

- **Interactive Booking Flow**  
  📌 Multi-step form with city selection, date picker, and passenger details  
  🔍 Real-time seat availability visualization  

- **Secure Verification**  
  🔒 OTP-based authentication via Twilio integration  
  🛡️ JWT token validation for all transactions  

- **Digital Ticketing**  
  🎫 QR-coded e-tickets with unique booking IDs  
  📄 PDF download capability (mobile-friendly)  

- **Modern UI**  
  ✨ Glassmorphism design with responsive layout  
  🎨 Themed color scheme matching Karnataka tourism  

## 🛠️ Technology Stack

| Category       | Technologies Used                          |
|----------------|--------------------------------------------|
| Frontend       | React 18, Context API, Custom Hooks        |
| Styling        | CSS3 (Flexbox/Grid), Glassmorphism Effects |
| Utilities      | Axios, date-fns, react-icons               |
| PDF Generation | jsPDF, html2canvas                         |
| Deployment     | Vercel (CI/CD)                             |

## 📱 Screenshot Gallery

<div align="center">
  <img src="https://github.com/user-attachments/assets/0c45f851-b681-45bb-baf4-87ddac205ace" width="30%" alt="OTP Screen">
  <img src="https://github.com/user-attachments/assets/92ce342d-a981-4f63-979a-5d1e103f94fe" width="30%" alt="Booking Form">
  <img src="https://github.com/user-attachments/assets/736ef89d-97d1-4a8d-ab4e-05b94351a264" width="30%" alt="Ticket Preview">
</div>

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm/yarn
- Backend server (for API endpoints)

### Installation
```bash
# Clone repository
git clone https://github.com/Abuosm/Travelleasy.git
cd Travelleasy

# Install dependencies
npm install

# Configure environment (create .env file)
echo "REACT_APP_API_BASE_URL=https://your-backend-api.com" > .env

# Start development server
npm start
🔧 Configuration
Update API endpoints in src/config.js:

javascript
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_BASE_URL,
  ENDPOINTS: {
    SEND_OTP: '/send-otp',
    VERIFY_OTP: '/verify-otp',
    CREATE_TICKET: '/create-ticket'
  }
};
📚 Documentation
API Integration Guide

UI Component Library

Deployment Checklist


We welcome contributions! Please follow these steps:

Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📜 License
Distributed under the MIT License. See LICENSE for more information.

✉️ Contact
Abubakar Osman Parsung
📧 abubakerosman56@gmail.com
🔗 GitHub Profile
