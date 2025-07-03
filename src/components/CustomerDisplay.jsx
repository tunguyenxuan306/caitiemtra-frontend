import React from 'react';

export default function CustomerDisplay({ menu, currentOrder, qrCode }) {
  return (
    <div className="customer-display">
      <MenuDisplay items={menu} />
      {currentOrder && (
        <div className="order-summary">
          <h3>Đơn của bạn:</h3>
          <ul>
            {currentOrder.items.map((item) => (
              <li key={item.id}>
                {item.name} x {item.qty}
              </li>
            ))}
          </ul>
          <p><strong>Tổng cộng:</strong> {currentOrder.total.toLocaleString()} đ</p>
        </div>
      )}
      {qrCode && <img src={qrCode} alt="QR thanh toán" className="qr-code" />}
    </div>
  );
}
