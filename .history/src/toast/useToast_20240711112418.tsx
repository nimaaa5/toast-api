import {useState, useEffect, createPortal} from "react";
import ToastContainer from "./ToastContainer";


const useToast = () => {

  const addToast = (message:string)=>{
    const [showToast, setShowToast] = useState<boolean>(false);
    useEffect(() => {
      setInterval(() => {
          setShowToast(true);
      }, 3000);
    })
    return (
      <ToastContainer/>
    )
  }
  return {addToast};
}

export default useToast;