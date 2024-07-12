import ReactDOM from 'react-dom';
import Toast from './Toast';
import './ToastContainer.css'; // Add styles for the toast portal

interface Toast {
  id: number;
  message: string;
  type: 'info' | 'success' | 'error';
}

interface ToastContainerProps {
  toasts: Toast[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  return ReactDOM.createPortal(
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} type={toast.type} />
      ))}
    </div>,
    document.body // Renders the toasts at the end of the body element
  );
};

export default ToastContainer;