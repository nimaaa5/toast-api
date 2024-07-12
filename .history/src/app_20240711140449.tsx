import { useEffect, useState } from 'preact/hooks';
import './app.css';
import useToast from './toast/useToast.tsx';

export function App() {
  const [clicked, setClicked] = useState<boolean>();
  const {addToast} = useToast();
  useEffect(() => {
    addToast();
  })


  return (
    <button onClick={}>click</button>
  )
}
