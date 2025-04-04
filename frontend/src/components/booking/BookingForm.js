import React, { useState } from 'react';
import Button from '@/components/ui/Button';

export default function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 處理預約邏輯
  };

  return (
    <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">預約顧問</h2>
      <input
        type="date"
        className="w-full p-2 border rounded mb-4"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        className="w-full p-2 border rounded mb-4"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <Button type="submit">確認預約</Button>
    </form>
  );
} 