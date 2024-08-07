interface Props {
  name: string;
}

const Toast = (message:string) =>{

  return (
    <>
      <div className="toast">
        <div>{message}</div>
      </div>
    </>
  )
}

export default Toast;