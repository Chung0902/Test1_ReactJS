import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { setToastRef, showSuccessToast, showInfoToast, showWarningToast, showErrorToast } from '../../utils/utils';

const ComponentExample = () => {
  // Tạo một ref để giữ tham chiếu đến Toast component.
  const toast = useRef(null);

  // Sử dụng useEffect để thiết lập giá trị cho toastRef khi component được mount.
  React.useEffect(() => {
    setToastRef(toast.current);
  }, []);

  // Các hàm xử lý sự kiện khi người dùng click vào các nút, gọi các hàm hiển thị toast tương ứng.
  const handleSuccess = () => {
    showSuccessToast('Success', 'Operation completed successfully.');
  };

  const handleInfo = () => {
    showInfoToast('Info', 'This is an informative message.');
  };

  const handleWarning = () => {
    showWarningToast('Warning', 'Be cautious with this action.');
  };

  const handleError = () => {
    showErrorToast('Error', 'Something went wrong. Please try again.');
  };

  return (
    <div>
      <Toast ref={toast} />

      <button onClick={handleSuccess}>Show Success Toast</button>
      <button onClick={handleInfo}>Show Info Toast</button>
      <button onClick={handleWarning}>Show Warning Toast</button>
      <button onClick={handleError}>Show Error Toast</button>
    </div>
  );
};

export default ComponentExample;
