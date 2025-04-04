import React, { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ResetPasswordForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 處理重設密碼邏輯
  };

  return (
    <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">重設密碼</h2>
      <input
        type="email"
        placeholder="電子郵件"
        className="w-full p-2 border rounded mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit">發送重設連結</Button>
    </form>
  );
} 