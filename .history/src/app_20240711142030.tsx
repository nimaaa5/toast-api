import { useEffect, useState } from 'preact/hooks';
import './app.css';
import useToast from './toast/useToast.tsx';

export function App() {

  const [clicked, setClicked] = useState<boolean>(false);
  const {addToast} = useToast();
  useEffect(() => {
    console.log('effect');
    addToast('You have a new message.');
  }, [clicked]);


  return (
    <>
      <button type="submit" onClick={() => {setClicked(true); console.log('clicked')}}>click</button>
    </>
  )
}
