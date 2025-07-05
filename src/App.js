import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/home";
import TicketBooking from "./pages/TicketBooking";
import AboutUs from "./components/aboutUs";
import QRScanner from "./components/pwa/QRScanner"; // ✅ Import QR Scanner Component

function App() {
  const [qrCode, setQrCode] = useState("");

  // Protected Route for Authentication
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ticket-booking" element={<TicketBooking />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/qr-scanner" element={<QRScanner />} /> {/* ✅ QR Scanner Route Added */}

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        {/* Default Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
