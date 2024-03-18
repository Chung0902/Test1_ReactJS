import React, { createContext, useRef} from "react";
import { Toast } from "primereact/toast"; 

// Tạo UserContext
export const ToastContext = createContext(); // Tạo context ToastContext để chứa các phương thức hiển thị toast message

// Tạo Provider cho ToastContext
export const ToastProvider = ({ children }) => { // Định nghĩa Provider cho ToastContext, nhận children là các component con
  const toast = useRef(null); // Sử dụng useRef để lưu tham chiếu đến component Toast

   // Phương thức hiển thị toast message với loại "success"
  const showSuccess = (message) => {
    toast.current.show({
      severity: "success",
      summary: "Thành công",
      detail: message,
      life: 3000, 
    });
  };

  const showInfo = (message) => { 
    toast.current.show({
      severity: "info",
      summary: "Thông tin", 
      detail: message, 
      life: 3000, 
    });
  };

  const showWarn = (message) => { 
    toast.current.show({
      severity: "warn",
      summary: "Cảnh báo", 
      detail: message, 
      life: 3000, 
    });
  };

  const showError = (message) => { 
    toast.current.show({
      severity: "error",
      summary: "Lỗi",
      detail: message,
      life: 3000, 
    });
  };

  return (
    <ToastContext.Provider
     // Truyền các phương thức hiển thị toast message và tham chiếu đến component Toast vào context ToastContext
      value={{
        showSuccess,
        showInfo,
        showWarn,
        showError,
        toast,
      }}
    >
      {children} {/* Hiển thị các children (các component con) */}
      <Toast ref={toast} /> {/* Hiển thị component Toast và truyền tham chiếu đến nó */}
    </ToastContext.Provider>
  );
};
