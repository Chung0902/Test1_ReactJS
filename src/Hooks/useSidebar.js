import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';


const useSidebar = () => {
  const [visible, setVisible] = useState(false);   // Trạng thái của sidebar (có hiển thị hay không)
  const [position, setPosition] = useState('right'); // Mặc định vị trí là bên phải

  // Hàm để hiển thị sidebar với vị trí được truyền vào
  const showSidebar = (pos) => {
    setPosition(pos);
    setVisible(true);
  };

  // Hàm để ẩn sidebar
  const hideSidebar = () => {
    setVisible(false);
  };

  // Component Sidebar có thể tái sử dụng, nhận children là nội dung bên trong
  const SidebarComponent = ({ children }) => (
    <Sidebar visible={visible} position={position} onHide={hideSidebar}>
      {children}
    </Sidebar>
  );

  // Trả về hàm để hiển thị sidebar và component Sidebar để sử dụng trong các thành phần khác
  return { showSidebar, Sidebar: SidebarComponent };
};

export default useSidebar;
