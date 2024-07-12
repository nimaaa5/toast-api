import { useEffect, useState } from 'preact/hooks';
import { createPortal } from 'preact/compat';
import Toast from './Toast';

export default function ToastContainer(message: string){
  const [showToast, setShowToast] = useState<boolean>(false);
    useEffect(() => {
      setInterval(() => {
          setShowToast(true);
      }, 3000);
    })

  return (
    <>
      {showToast && createPortal(
        <Toast message={message}/>, document.body
      )}
    </>
  )
}