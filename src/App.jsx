import { useEffect, useState } from "react";
import { fetchMenu, placeOrder } from "./services/api";
import React from 'react';


function App() {
  const [menu, setMenu] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(() => { fetchMenu().then(setMenu); }, []);

  const addToOrder = (item) => setSelected([...selected, { ...item, qty: 1 }]);
  const checkout = async () => {
    const resp = await placeOrder({ items: selected, payment_method: "cash" });
    alert(`Order placed with ID ${resp.order_id}, amount ${resp.total_amount}`);
  };

  return (
    <div>
      <h1>Cái Tiệm Trà</h1>
      <div className="menu">
        {menu.map(m => (
          <div key={m.id} onClick={() => addToOrder(m)}>
            <img src={m.image_url} width={100} />
            <p>{m.name} - {m.price}đ</p>
          </div>
        ))}
      </div>
      <button onClick={checkout}>Thanh toán</button>
    </div>
  )
}
export default App;
