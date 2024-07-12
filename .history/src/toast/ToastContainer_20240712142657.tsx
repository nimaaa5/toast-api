import ReactDOM from 'react-dom';
import Toast from './Toast';
import './ToastContainer.css'; // Add styles for the toast portal

interface IToast {
  id: number;
  message: string;
  type: 'info' | 'success' | 'error';
}

interface ToastPortalProps {
  toasts: ToastData[];
}

const ToastContainer:  React.FC<ToastPortalProps>  = ({ toasts, removeToast }) => {
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
    document.body
  );
};

export default ToastContainer;