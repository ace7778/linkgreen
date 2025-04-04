import React from 'react';

export default function ConsultantProfile({ consultant }) {
  return (
    <div className="bg-white rounded shadow-md p-8">
      <h2 className="text-3xl font-bold mb-4">{consultant.name}</h2>
      <p className="mb-2">技能：{consultant.skills.join(', ')}</p>
      <p className="mb-2">經驗：{consultant.experience}</p>
      <p className="mb-2">簡介：{consultant.bio}</p>
    </div>
  );
} 