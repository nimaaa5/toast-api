import { useEffect, useState } from 'preact/hooks';
import './app.css';
import useToast from './toast/useToast.tsx';

export function App() {

  const [clicked, setClicked] = useState<boolean>(false);
  const {addToast} = useToast();
  useEffect(() => {
    addToast('You have a new message.');
  }, [clicked]);


  return (
    <>
      <button onClick={() => {setClicked(true)}}>click</button>
    </>
    
  )
}
