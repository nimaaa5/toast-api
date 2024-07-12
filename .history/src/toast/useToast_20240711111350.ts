import {useState, useEffect} from "react";


const useToast = () => {

  const addToast = (message:string)=>{
    const [showTest, setShowTest] = useState<boolean>(false);
    useEffect(() => {
      setInterval(() => {

      }, 3000)
    })
  }

  return {addToast};
}

