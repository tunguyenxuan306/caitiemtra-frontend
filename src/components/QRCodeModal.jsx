import React from 'react';

export default function QRCodeModal({ visible, qrCodeUrl, onClose }) {
  if (!visible) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Quét mã để thanh toán</h3>
        <img src={qrCodeUrl} alt="QR thanh toán" />
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
}
