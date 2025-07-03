import { useEffect, useState } from "react";
import api from "../services/api";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await api.get("/orders");
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6">\      <h2 className="text-xl font-bold mb-4">🛒 Đơn hàng</h2>
      <ul className="space-y-2">
        {orders.map((order: any) => (
          <li key={order.id} className="p-2 rounded bg-gray-100">
            <div><strong>Mã đơn:</strong> {order.id}</div>
            <div><strong>Khách:</strong> {order.customer}</div>
            <div><strong>Thành tiền:</strong> {order.total}₫</div>
          </li>
        ))}
      </ul>
    </div>
  );
}