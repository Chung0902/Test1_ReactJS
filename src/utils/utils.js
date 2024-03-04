import { useRef } from 'react';
import { Toast } from 'primereact/toast';

// Biến toàn cục để giữ tham chiếu tới Toast component.
let toastRef;

// Hàm hiển thị toast với các thông tin như severity, summary, detail và màu nền.
export const showToast = (severity, summary, detail, color) => {
  // Kiểm tra xem toastRef đã được thiết lập chưa.
  if (toastRef) {
    // Gọi phương thức show của toastRef để hiển thị toast với thông tin được truyền vào.
    toastRef.show({
      severity,      
      summary,      
      detail,       
      life: 5000,     
      sticky: false, 
      style: { backgroundColor: color } 
    });
  }
};

// Các hàm hiển thị toast với các trạng thái cụ thể (success, info, warning, error) sử dụng hàm showToast đã được định nghĩa trước đó.

// Hàm hiển thị toast với trạng thái "success".
export const showSuccessToast = (summary, detail, color = '#4CAF50') => {
  showToast('success', summary, detail, color);
};

// Hàm hiển thị toast với trạng thái "info".
export const showInfoToast = (summary, detail, color = '#2196F3') => {
  showToast('info', summary, detail, color);
};

// Hàm hiển thị toast với trạng thái "warning".
export const showWarningToast = (summary, detail, color = '#FFC107') => {
  showToast('warn', summary, detail, color);
};

// Hàm hiển thị toast với trạng thái "error".
export const showErrorToast = (summary, detail, color = '#FF5252') => {
  showToast('error', summary, detail, color);
};

// Hàm này dùng để thiết lập giá trị cho biến toastRef, từ đó cho phép các hàm hiển thị toast sử dụng được tham chiếu đến Toast component.
export const setToastRef = (ref) => {
  toastRef = ref;
};
