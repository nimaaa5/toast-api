// useToast.ts
import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ToastData {
  id: string;
  message: string;
  duration?: number;
}

const useToast = () => {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const addToast = useCallback((message: string, duration?: number) => {
    const id = uuidv4();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id, message, duration }
    ]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return {
    toasts,
    addToast,
    removeToast
  };
};

export default useToast;
