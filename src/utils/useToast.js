import React, { createContext, useContext, useRef } from "react";

// Tạo một context cho toast
const ToastContext = createContext();

// Tạo một provider cho context toast
export const ToastProvider = ({ children }) => {
  const toastRef = useRef(null);

  return (
    <ToastContext.Provider value={toastRef}>
      {children}
    </ToastContext.Provider>
  );
};

// Hàm tiện ích để sử dụng toast
export const useToast = () => {
  return useContext(ToastContext);
};
