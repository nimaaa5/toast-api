import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Toast from './Toast';
import './ToastPortal.css'; // Add styles for the toast portal

const ToastPortal = ({ toasts, removeToast }) => {
  return ReactDOM.createPortal(
    <div className="toast-portal">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>,
    document.getElementById('toast-root')
  );
};

export default ToastPortal;