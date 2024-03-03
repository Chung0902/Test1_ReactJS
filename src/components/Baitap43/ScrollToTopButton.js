import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const ScrollToTopButton = () => {
  // Hàm xử lý sự kiện khi nút được click
  const handleScrollToTop = () => {
    // Sử dụng thư viện 'react-scroll' để cuộn trang lên đầu
    scroll.scrollToTop();
  };

  return (
    <ScrollLink
      to="top"        // ID của phần tử mục tiêu cần cuộn đến
      spy={true}      // Theo dõi trạng thái của các phần tử cuộn
      smooth={true}   // Cuộn mượt
      duration={500}  // Thời gian cuộn (miliseconds)
      offset={-70}    // Điều chỉnh offset nếu có thanh Navbar fixed
    >
      <button onClick={handleScrollToTop}>Cuộn lên đầu</button>
    </ScrollLink>
  );
};


export default ScrollToTopButton;
