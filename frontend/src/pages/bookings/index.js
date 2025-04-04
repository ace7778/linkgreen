import React from 'react';
import BookingForm from '@/components/booking/BookingForm';

export default function BookingsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">預約管理</h1>
      <BookingForm />
    </div>
  );
} 