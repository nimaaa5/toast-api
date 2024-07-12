import './app.css';
import useToast from './toast/useToast.tsx';
import ToastContainer from './toast/ToastContainer.tsx';

export function App() {
  const { toasts, addToast } = useToast();

  const showToast = () => {
    addToast('This is a sample toast!', 'success', 3000);
    addToast('This is a sample toast!', 'error', 5000);

  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <ToastContainer toasts={toasts} />
    </div>
  );
}
