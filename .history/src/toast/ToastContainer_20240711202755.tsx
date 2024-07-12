import { useEffect, useState } from 'preact/hooks';
import { createPortal } from 'preact/compat';
import Toast from './Toast';
import Props from './Props';

const ToastContainer:React.FC<Props> = ({message})=>{
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 1000); // Delay to match the fadeOut animation duration
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <>
      {showToast && createPortal(
        <Toast message={message}/>, document.body
      )}
    </>
  )
}

export default ToastContainer;