// Toast.js
import React, { useEffect } from 'react';
import './toast.css'; // Add styles for the toast

interface IToast{
    message:string;
    type: 'info'| 'success'| 'error';
}

const Toast:React.FC<IToast>  = ({ message, type }) => {

  return (
    <div className={`toast toast-${type}`}>
      {message}
    </div>
  );
};

export default Toast;