import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const ScrollToTopButton = () => {
  // Sử dụng useState để theo dõi vị trí cuộn của trang
  const [showButton, setShowButton] = useState(false);

  // Hàm xử lý sự kiện khi nút được click
  const handleScrollToTop = () => {
    // Sử dụng thư viện 'react-scroll' để cuộn trang lên đầu
    scroll.scrollToTop();
  };

  // Hàm xử lý sự kiện khi trang được cuộn
  const handleScroll = () => {
    // Nếu vị trí cuộn lớn hơn một giá trị cụ thể (ví dụ: 100px), hiển thị nút
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Sử dụng useEffect để đăng ký sự kiện cuộn trang khi component được mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Đảm bảo hủy đăng ký sự kiện khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    showButton && (
      <ScrollLink
        to="top"        // ID của phần tử mục tiêu cần cuộn đến
        spy={true}      // Theo dõi trạng thái của các phần tử cuộn
        smooth={true}   // Cuộn mượt
        duration={500}  // Thời gian cuộn (miliseconds)
        offset={-70}    // Điều chỉnh offset nếu có thanh Navbar fixed
      >
        <button onClick={handleScrollToTop}>Cuộn lên đầu</button>
      </ScrollLink>
    )
  );
};

export default ScrollToTopButton;
