import ReactDOM from 'react-dom';
import Toast from './Toast';
import './ToastContainer.css'; // Add styles for the toast portal

interface IToast {
  id: number;
  message: string;
  type: 'info' | 'success' | 'error';
}

interface ToastContainerProps {
  toasts: IToast[];
}

const ToastContainer:  React.FC<ToastContainerProps>  = ({ toasts }) => {
  return ReactDOM.createPortal(
    <div className="toast-container">
     {toasts.map((toast) => {
      
     })}
    </div>,
    document.body
  );
};

export default ToastContainer;