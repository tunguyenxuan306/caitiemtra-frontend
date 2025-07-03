import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await api.post("/auth/login", { username, password });
    localStorage.setItem("token", res.data.token);
    navigate("/menu");
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">🔐 Đăng nhập</h2>
      <input className="input input-bordered w-full mb-2" placeholder="Tài khoản" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="input input-bordered w-full mb-4" type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary w-full" onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}