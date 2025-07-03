import React from 'react';

export default function OrderPanel({ menu, onOrder }) {
  return (
    <div className="order-panel">
      {menu.map(item => (
        <button key={item.id} onClick={() => onOrder(item)}>{item.name}</button>
      ))}
    </div>
  );
}
