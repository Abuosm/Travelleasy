import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import "./QRScanner.css";

const QRScanner = ({ onScan }) => {
  const videoRef = useRef(null);
  const [scanResult, setScanResult] = useState("");

  useEffect(() => {
    const qrScanner = new QrScanner(
      videoRef.current,
      (result) => {
        setScanResult(result.data);
        if (onScan) onScan(result.data);
      },
      {
        returnDetailedScanResult: true,
        highlightScanRegion: true,
      }
    );

    qrScanner.start();

    return () => {
      qrScanner.stop();
    };
  }, [onScan]);

  return (
    <div className="qr-scanner-container">
      <div className="qr-scanner-box">
        <h2>Scan QR Code</h2>
        <video ref={videoRef} className="qr-video"></video>
        {scanResult && (
          <div className="qr-result">
            <h3>Scanned Result:</h3>
            <p>{scanResult}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRScanner;
