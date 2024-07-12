import {useState, useEffect} from "react";


const useToast = () => {

  const addToast = (message:string)=>{
    const [showTest, setShowTest] = useState<boolean>(false);
    useEffect(() => {
      setInterval(() => {
          setShowTest(true);
      }, 3000);
    })
  }

  return {addToast};
}

