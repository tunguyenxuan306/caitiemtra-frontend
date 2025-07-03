import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chào mừng đến Cái Tiệm Trà 🍵</h1>
      <div className="flex flex-col space-y-2">
        <Link to="/menu" className="btn btn-outline">📋 Quản lý Menu</Link>
        <Link to="/orders" className="btn btn-outline">🛒 Đơn hàng</Link>
      </div>
    </div>
  );
}
