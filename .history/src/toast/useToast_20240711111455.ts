import {useState, useEffect} from "react";


const useToast = () => {

  const addToast = (message:string)=>{
    const [showToast, setShowToast] = useState<boolean>(false);
    useEffect(() => {
      setInterval(() => {
          setShowToast(true);
      }, 3000);
    })
    return {message, showToast}
  }
  return {addToast};
}

