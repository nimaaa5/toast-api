// Toast.js
import React from 'react';
import './toast.css'; // Add styles for the toast

interface ToastProps {
  message: string;
  type: 'info' | 'success' | 'error';
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  return (
    <div className={`toast toast-${type}`}>
      {message}
    </div>
  );
};

export default Toast;