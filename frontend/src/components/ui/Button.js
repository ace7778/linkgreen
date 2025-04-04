import React from 'react';

export default function Button({ children, type = 'button', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
    >
      {children}
    </button>
  );
} 