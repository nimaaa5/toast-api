// Toast.js
import React, { useEffect } from 'react';
import './toast.css'; // Add styles for the toast

interface IToast{
    message:string;
    type: 'info'| 'success'| 'error';
}

const Toast:React.FC<IToast>  = ({ message, type }) => {
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