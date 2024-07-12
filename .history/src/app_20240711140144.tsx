import { useEffect } from 'preact/hooks';
import './app.css';
import useToast from './toast/useToast.tsx';

export function App() {
  const {addToast} = useToast();
  useEffect(() => {
    addToast();
  })


  return (
    <button>click</button>
  )
}
