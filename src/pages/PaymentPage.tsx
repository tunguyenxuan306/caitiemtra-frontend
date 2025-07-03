import { useState } from "react";
import api from "../services/api";

export default function PaymentPage() {
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");

  const handlePayment = async () => {
    await api.post("/payment", { amount, note });
    setAmount(0);
    setNote("");
    alert("Thanh toán thành công!");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">💳 Thanh toán</h2>
      <input className="input input-bordered w-full mb-2" type="number" placeholder="Số tiền" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <input className="input input-bordered w-full mb-4" placeholder="Ghi chú" value={note} onChange={(e) => setNote(e.target.value)} />
      <button className="btn btn-success w-full" onClick={handlePayment}>Xác nhận</button>
    </div>
  );
}
