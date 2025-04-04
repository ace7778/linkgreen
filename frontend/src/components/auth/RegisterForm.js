import React, { useState } from 'react';
import Button from '@/components/ui/Button';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 處理註冊邏輯
  };

  return (
    <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">註冊 LineGreen 帳號</h2>
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
      <input
        type="password"
        placeholder="確認密碼"
        className="w-full p-2 border rounded mb-4"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <Button type="submit">註冊</Button>
    </form>
  );
} 