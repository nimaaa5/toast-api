import { useEffect, useState } from 'preact/hooks';
import { createPortal } from 'preact/compat';
import Toast from './Toast';
import Props from './Props';

const ToastContainer:React.FC<Props> = ({message})=>{
  const [showToast, setShowToast] = useState<boolean>(false);
    useEffect(() => {
      setShowToast(true);
      setTimeout(() => {
           setShowToast(false);
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

export default ToastContainer;