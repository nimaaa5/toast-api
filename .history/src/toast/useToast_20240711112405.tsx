import {useState, useEffect, createPortal} from "react";


const useToast = () => {

  const addToast = (message:string)=>{
    const [showToast, setShowToast] = useState<boolean>(false);
    useEffect(() => {
      setInterval(() => {
          setShowToast(true);
      }, 3000);
    })
    return (
      {showToast && createPortal(
        <Toast/>
      )}
    )
  }
  return {addToast};
}

export default useToast;