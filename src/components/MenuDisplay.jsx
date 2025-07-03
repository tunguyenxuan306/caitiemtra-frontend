import React from 'react';
import './menu.css';

export default function MenuDisplay({ items }) {
  return (
    <div className="menu-display">
      <h2>Thực đơn hôm nay</h2>
      <div className="menu-grid">
        {items.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <div className="info">
              <h4>{item.name}</h4>
              <p>{item.price.toLocaleString()} đ</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
