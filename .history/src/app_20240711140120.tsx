import { useEffect } from 'preact/hooks';
import './app.css'
import FetchComponent from './fetch/FetchComponent.tsx';
import ToastContainer from './toast/ToastContainer.tsx';
import useToast from './toast/useToast.tsx';

export function App() {
  const {addToast} = useToast();
  useEffect(() => {
    addToast();
  })


  return (

    <ToastContainer/>
  )
}
