import { useState, useRef } from 'react'; 

const useToast = () => {
  const [visible, setVisible] = useState(false); // Tạo state 'visible' và hàm 'setVisible' để quản lý trạng thái hiển thị toast
  const toastRef = useRef(null); // Tạo ref 'toastRef' để tham chiếu đến component Toast

  // Hàm showToast để hiển thị toast với các thông tin được truyền vào
  const showToast = (severity, summary, detail, life = 3000) => {
    // Kiểm tra xem ref đã được khởi tạo chưa
    if (toastRef.current) { 
      // Gọi phương thức show() của component Toast để hiển thị toast
      toastRef.current.show({ severity, summary, detail, life }); 
    }
  };

  return { showToast, toastRef };
};

export default useToast;
