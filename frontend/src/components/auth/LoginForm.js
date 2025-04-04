import React, { useState } from 'react';
import Button from '@/components/ui/Button';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 處理登入邏輯
  };

  return (
    <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">登入 LineGreen</h2>
      <input
        type="email"
        placeholder="電子郵件"
        className="w-full p-2 border rounded mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="密碼"
        className="w-full p-2 border rounded mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">登入</Button>
    </form>
  );
} 