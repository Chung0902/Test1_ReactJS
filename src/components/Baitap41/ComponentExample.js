import React, { useRef } from "react";
import { Toast } from "primereact/toast";
import { Button } from 'primereact/button';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import {
  setToastRef,
  showSuccessToast,
  showInfoToast,
  showWarningToast,
  showErrorToast,
} from "../../utils/utils";

const ComponentExample = () => {
  // Tạo một ref để giữ tham chiếu đến Toast component.
  const toast = useRef(null);

  // Sử dụng useEffect để thiết lập giá trị cho toastRef khi component được mount.
  React.useEffect(() => {
    setToastRef(toast.current);
  }, []);

  // Hàm xử lý sự kiện khi người dùng click vào nút "Show Success Toast".
  const handleSuccess = () => {
    showSuccessToast("Success", "Operation completed successfully");
  };

  // Hàm xử lý sự kiện khi người dùng click vào nút "Show Info Toast".
  const handleInfo = () => {
    showInfoToast("Info", "This is an informative message");
  };

  // Hàm xử lý sự kiện khi người dùng click vào nút "Show Warning Toast".
  const handleWarning = () => {
    showWarningToast("Warning", "Be cautious with this action");
  };

  // Hàm xử lý sự kiện khi người dùng click vào nút "Show Error Toast".
  const handleError = () => {
    showErrorToast("Error", "Something went wrong. Please try again");
  };

  return (
    <div>
      <Toast ref={toast} />

       <Button label="Success" className="p-button-success"  onClick={handleSuccess}>
        Show Success Toast
      </Button>
      <Button label="Info" className="p-button-info" onClick={handleInfo}>
        Show Info Toast
      </Button>
      <Button label="Warn" className="p-button-warning" onClick={handleWarning}>Show Warning Toast</Button>
      <Button label="Error" className="p-button-danger" onClick={handleError}>Show Error Toast</Button>
    </div>
  );
};

export default ComponentExample;
