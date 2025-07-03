import React, { useState, useEffect } from 'react';
import OrderPanel from '../components/OrderPanel';
import QRCodeModal from '../components/QRCodeModal';
import { getMenu, createOrder } from '../api/payment';

function POSPage() {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState({ items: [] });
  const [showQR, setShowQR] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    getMenu().then(setMenu);
  }, []);

  const addItem = item => {
    const items = [...order.items];
    const found = items.find(i => i.id === item.id);
    if (found) {
      found.qty += 1;
    } else {
      items.push({ ...item, qty: 1 });
    }
    setOrder({ items });
  };

  const handleCheckout = async () => {
    const result = await createOrder(order);
    setQrCodeUrl(result.qr_url);
    setShowQR(true);
  };

  return (
    <div>
      <OrderPanel menu={menu} onOrder={addItem} />
      <button onClick={handleCheckout}>Thanh toán</button>
      <QRCodeModal visible={showQR} qrCodeUrl={qrCodeUrl} onClose={() => setShowQR(false)} />
    </div>
  );
}

export default POSPage;