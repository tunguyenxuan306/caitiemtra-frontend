import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await login(username, password);
      navigate('/pos');
    } catch (e) {
      alert('Đăng nhập thất bại');
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <input placeholder="Tên đăng nhập" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Mật khẩu" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Đăng nhập</button>
    </div>
  );
}

export default LoginPage;