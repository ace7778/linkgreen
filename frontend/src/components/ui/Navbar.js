import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">LineGreen</span>
        </Link>
        <div>
          <Link href="/consultants" className="mr-4 hover:underline">顧問列表</Link>
          <Link href="/bookings" className="hover:underline">預約管理</Link>
        </div>
      </div>
    </nav>
  );
} 