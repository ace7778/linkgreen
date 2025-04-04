import React from 'react';
import ConsultantCard from '@/components/consultant/ConsultantCard';

export default function ConsultantsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">顧問列表</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConsultantCard />
        {/* TODO: 動態載入顧問資料 */}
      </div>
    </div>
  );
} 