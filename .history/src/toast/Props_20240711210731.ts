export default interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}
