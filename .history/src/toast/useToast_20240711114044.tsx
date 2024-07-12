import ToastContainer from "./ToastContainer";


const useToast = () => {

  const addToast = (message:string)=>{
    return (
      <>
        <ToastContainer message={message}/>
      </>
    )
    
  }
  return {addToast};
}

export default useToast;