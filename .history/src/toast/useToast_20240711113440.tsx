import {useState, useEffect, createPortal} from "react";
import ToastContainer from "./ToastContainer";


const useToast = () => {

  const addToast = (message:string)=>{
    return (
      <>
        <ToastContainer/>
      </>
    )
    
  }
  return {addToast};
}

export default useToast;