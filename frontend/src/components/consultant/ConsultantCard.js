import React from 'react';
import Button from '@/components/ui/Button';

export default function ConsultantCard({ consultant }) {
  return (
    <div className="bg-white rounded shadow-md p-6">
      <h3 className="text-xl font-bold mb-2">{consultant.name}</h3>
      <p className="mb-4">{consultant.skills.join(', ')}</p>
      <Button>查看詳情</Button>
    </div>
  );
} 