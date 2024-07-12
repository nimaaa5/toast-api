import { useEffect, useState } from 'preact/hooks';
import useToast from './useToast';

export default function ToastContainer(){
  const [showToast, setShowToast] = useState<boolean>(false);
    useEffect(() => {
      setInterval(() => {
          setShowToast(true);
      }, 3000);
    })

  return (
    <>

    </>
  )
}