import { useEffect, useState } from "react";
import api from "../services/api";

export default function StatsPage() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    api.get("/stats").then((res) => setStats(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📊 Báo cáo & Thống kê</h2>
      {stats ? (
        <ul className="space-y-2">
          <li><strong>Tổng đơn hàng:</strong> {stats.totalOrders}</li>
          <li><strong>Doanh thu:</strong> {stats.revenue}₫</li>
          <li><strong>Sản phẩm bán chạy:</strong> {stats.bestSeller}</li>
        </ul>
      ) : (
        <p>Đang tải...</p>
      )}
    </div>
  );
}