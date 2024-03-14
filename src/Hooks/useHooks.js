import React, { createContext, useRef } from "react";
import { Toast } from "primereact/toast";

// Tạo một Context để lưu trữ tham chiếu tới Toast component
export const ToastContext = createContext(null);

// Tạo một Provider để cung cấp tham chiếu tới Toast component
export const ToastProvider = ({ children }) => {
  // Sử dụng useRef để lưu trữ tham chiếu tới Toast component
  const toastRef = useRef(null);

  return (
    // Provider cung cấp tham chiếu tới Toast component thông qua context
    <ToastContext.Provider value={toastRef}>
      {/* Render Toast component và các component con */}
      <Toast ref={toastRef} />
      {children}
    </ToastContext.Provider>
  );
};
