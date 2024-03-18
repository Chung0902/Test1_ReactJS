import { useContext } from "react"; 
import { ToastContext } from "../components/Baitap46/ToastProvider"; 

const useToast = () => { 
    // Sử dụng hook useContext để truy cập context ToastContext, lưu giữ trong biến toast
  const toast = useContext(ToastContext); 

  // Kiểm tra xem toast hoặc các phương thức showSuccess, showInfo, showWarn, showError có tồn tại hay không
  if (
    !toast ||
    !toast.showSuccess ||
    !toast.showInfo ||
    !toast.showWarn ||
    !toast.showError
  ) {
    // Nếu không tồn tại, throw một lỗi với thông báo yêu cầu sử dụng hook useToast bên trong ToastProvider
    throw new Error("useToast must be used within a ToastProvider");
  }

  return toast; // Trả về toast, nơi chứa các phương thức để hiển thị toast message
};

export default useToast;
