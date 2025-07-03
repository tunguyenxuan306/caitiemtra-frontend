import React, { useEffect, useState } from 'react';
import CustomerDisplay from '../components/CustomerDisplay';
import { getMenu } from '../api/payment';

function CustomerDisplayPage() {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState(null);
  const [qrCode, setQrCode] = useState(null);

  useEffect(() => {
    getMenu().then(setMenu);
    const socket = new WebSocket('wss://your-socket-server/display');
    socket.onmessage = event => {
      const data = JSON.parse(event.data);
      if (data.type === 'order') setOrder(data.payload);
      if (data.type === 'qr') setQrCode(data.payload);
    };
    return () => socket.close();
  }, []);

  return <CustomerDisplay menu={menu} currentOrder={order} qrCode={qrCode} />;
}

export default CustomerDisplayPage;
