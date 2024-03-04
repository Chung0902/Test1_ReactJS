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

  // Hàm xử lý sự kiện khi người dùng click vào nút "Show Success Toast".
  const handleSuccess = () => {
    showSuccessToast('Success', 'Operation completed successfully', '#4CAF50');
  };

  // Hàm xử lý sự kiện khi người dùng click vào nút "Show Info Toast".
  const handleInfo = () => {
    showInfoToast('Info', 'This is an informative message', '#2196F3');
  };

  // Hàm xử lý sự kiện khi người dùng click vào nút "Show Warning Toast".
  const handleWarning = () => {
    showWarningToast('Warning', 'Be cautious with this action', '#FFC107');
  };

  // Hàm xử lý sự kiện khi người dùng click vào nút "Show Error Toast".
  const handleError = () => {
    showErrorToast('Error', 'Something went wrong. Please try again', '#FF5252');
  };

  return (
    <div>

      <Toast ref={toast} />

      <button onClick={handleSuccess} style={{ backgroundColor: '#4CAF50', color: '#fff' }}>Show Success Toast</button>
      <button onClick={handleInfo} style={{ backgroundColor: '#2196F3', color: '#fff' }}>Show Info Toast</button>
      <button onClick={handleWarning} style={{ backgroundColor: '#FFC107', color: '#fff' }}>Show Warning Toast</button>
      <button onClick={handleError} style={{ backgroundColor: '#FF5252', color: '#fff' }}>Show Error Toast</button>
    </div>
  );
};


export default ComponentExample;
