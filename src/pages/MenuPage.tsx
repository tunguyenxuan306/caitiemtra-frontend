import { useEffect, useState } from "react";
import api from "../services/api";

export default function MenuPage() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const fetchMenu = async () => {
    const res = await api.get("/menu");
    setItems(res.data);
  };

  const addItem = async () => {
    await api.post("/menu", { name, price });
    setName("");
    setPrice(0);
    fetchMenu();
  };

  const deleteItem = async (id: string) => {
    await api.delete(`/menu/${id}`);
    fetchMenu();
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📋 Quản lý Menu</h2>
      <div className="flex space-x-2 mb-4">
        <input className="input input-bordered" placeholder="Tên món" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="input input-bordered" type="number" placeholder="Giá" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        <button className="btn btn-success" onClick={addItem}>Thêm</button>
      </div>
      <ul className="space-y-2">
        {items.map((item: any) => (
          <li key={item.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span>{item.name} - {item.price}₫</span>
            <button className="btn btn-sm btn-error" onClick={() => deleteItem(item.id)}>Xoá</button>
          </li>
        ))}
      </ul>
    </div>
  );
}