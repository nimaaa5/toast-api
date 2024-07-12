import { useContext, useEffect, useState } from 'preact/hooks';
import './app.css';
import useToast from './toast/useToast.tsx';
import ToastContainer from './toast/ToastContainer.tsx';

export function App() {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <div className="App">
      <button onClick={() => addToast('This is a toast message!', 3000)}>
        Show Toast
      </button>

      <ToastPortal toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
