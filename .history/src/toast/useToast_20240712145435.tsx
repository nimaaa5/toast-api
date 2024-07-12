import { useState, useCallback } from 'react';

interface Toast {
  id: number;
  message: string;
  type: 'info' | 'success' | 'error';
}

const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: 'info' | 'success' | 'error' = 'info', duration) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
    
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  return {
    toasts,
    addToast
  };
};

export default useToast;
