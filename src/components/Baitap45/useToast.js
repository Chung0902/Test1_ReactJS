import { useContext } from 'react';
import { ToastContext } from './ToastContext';

const useToast = () => {
  const { addToast } = useContext(ToastContext);

  const showToast = (severity, summary, detail, life = 3000) => {
    addToast({ severity, summary, detail, life });
  };

  return { showToast };
};

export default useToast;