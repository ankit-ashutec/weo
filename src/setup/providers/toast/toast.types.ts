export interface ToastProps {
  message: string;
  onClose: () => void;
}

export interface ToastContextType {
  showToast: (message: string) => void;
}
