import useToast from './useToast';

export default function ToastContainer(){
  const {addToast} = useToast();

  addToast('New Notification');
}