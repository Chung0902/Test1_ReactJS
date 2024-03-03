import { useRef } from 'react';
import { Toast } from 'primereact/toast';

// Biến toàn cục để giữ tham chiếu tới Toast component.
let toastRef;

// Hàm hiển thị toast với các thông tin như severity, summary, detail.
export const showToast = (severity, summary, detail) => {
  // Kiểm tra xem toastRef đã được thiết lập chưa.
  if (toastRef) {
    // Nếu có, gọi phương thức show của toastRef với thông tin toast cần hiển thị.
    toastRef.show({ severity, summary, detail });
  }
};

// Các hàm hiển thị toast với các trạng thái cụ thể (success, info, warning, error) sử dụng hàm showToast đã được định nghĩa trước đó.
export const showSuccessToast = (summary, detail) => {
  showToast('success', summary, detail);
};

export const showInfoToast = (summary, detail) => {
  showToast('info', summary, detail);
};

export const showWarningToast = (summary, detail) => {
  showToast('warn', summary, detail);
};

export const showErrorToast = (summary, detail) => {
  showToast('error', summary, detail);
};

// Hàm này dùng để thiết lập giá trị cho biến toastRef, từ đó cho phép các hàm hiển thị toast sử dụng được tham chiếu đến Toast component.
export const setToastRef = (ref) => {
  toastRef = ref;
};
