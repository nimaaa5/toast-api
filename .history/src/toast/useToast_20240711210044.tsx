import ToastContainer from "./ToastContainer";


const useToast = () => {

  const addToast = (message:string)=> {
    console.log(message);
    return (
      <>
        <ToastContainer message={message}/>
      </>
    )
    
  }
  return {addToast};
}

export default useToast;