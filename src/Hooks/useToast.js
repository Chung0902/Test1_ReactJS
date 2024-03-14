import { useContext } from "react";
import { ToastContext } from "./useHooks";

// Tạo một useToast hook để sử dụng Toast component trong các component con
export const useToast = () => {
  // Sử dụng useContext để truy cập tham chiếu tới Toast component thông qua context
  const toastRef = useContext(ToastContext);

  // Hàm hiển thị toast
  const showToast = (severity, summary, detail) => {
    // Kiểm tra xem toastRef có tồn tại không
    if (toastRef.current) {
      // Hiển thị toast
      toastRef.current.show({
        severity,
        summary,
        detail,
        life: 3000, // Thời gian tồn tại của toast (3 giây)
        sticky: false, // Không giữ toast sau khi hiển thị
      });
    }
  };

  // Hàm hiển thị toast success
  const showSuccessToast = (summary, detail) => {
    showToast("success", summary, detail);
  };

  // Hàm hiển thị toast info
  const showInfoToast = (summary, detail) => {
    showToast("info", summary, detail);
  };

  // Hàm hiển thị toast warning
  const showWarningToast = (summary, detail) => {
    showToast("warn", summary, detail);
  };

  // Hàm hiển thị toast error
  const showErrorToast = (summary, detail) => {
    showToast("error", summary, detail);
  };

  // Trả về các hàm hiển thị toast
  return { showSuccessToast, showInfoToast, showWarningToast, showErrorToast };
};
