import { useEffect, useState } from 'preact/hooks';
import useToast from './useToast';
import { createPortal } from 'preact/compat';

export default function ToastContainer(){
  const [showToast, setShowToast] = useState<boolean>(false);
    useEffect(() => {
      setInterval(() => {
          setShowToast(true);
      }, 3000);
    })

  return (
    <>
      {showToast && createPortal(
        <Toast/>, document.body
      )}
    </>
  )
}