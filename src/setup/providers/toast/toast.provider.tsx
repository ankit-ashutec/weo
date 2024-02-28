import React, {createContext, useContext, useState} from 'react';
import {ToastContextType} from './toast.types';
import Toast from './toast';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: FCC = ({children}) => {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
  };

  return (
    <ToastContext.Provider value={{showToast}}>
      {children}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
