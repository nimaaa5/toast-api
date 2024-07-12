import Props from './Props.ts';
const Toast: React.FC<Props> = ({message}) =>{

  return (
    <>
      <div className="toast">
        <div>{message}</div>
      </div>
    </>
  )
}

export default Toast;