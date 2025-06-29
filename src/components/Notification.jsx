import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

export default function Notification({ message, type = 'info' }) {
  if (!message) return null;

  const bgColor = {
    info: 'linear-gradient(to right, #2193b0, #6dd5ed)',
    success: 'linear-gradient(to right, #56ab2f, #a8e063)',
    warning: 'linear-gradient(to right, #f7971e, #ffd200)',
    error: 'linear-gradient(to right, #e52d27, #b31217)',
  };

  return (
    <div style={{
      background: bgColor[type],
      color: 'white',
      padding: '14px 20px',
      borderRadius: '8px',
      margin: '15px auto',
      width: '90%',
      maxWidth: '500px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '16px'
    }}>
      <FaInfoCircle size={20} />
      <span>{message}</span>
    </div>
  );
}
