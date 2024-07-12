// Toast.js
import React, { useEffect } from 'react';
import './Toast.css'; // Add styles for the toast
import Props from './Props';

const Toast:React.FC<Props>  = ({ message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="toast">
      {message}
    </div>
  );
};

export default Toast;