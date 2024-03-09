import React, { useState, useRef, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  // Khai báo state cho từ khóa tìm kiếm và useRef để theo dõi input của người dùng
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  // Sử dụng useRef để lưu trữ timeout và tránh việc gọi hàm tìm kiếm liên tục
  const delayedSearch = useRef(null);

  // Hàm xử lý khi input thay đổi
  const handleChange = () => {
    setSearchTerm(searchInputRef.current.value);

    // Xóa timeout hiện tại và thiết lập một timeout mới
    clearTimeout(delayedSearch.current);
    delayedSearch.current = setTimeout(() => {
      // Gọi hàm tìm kiếm với từ khóa đã nhập sau 500ms
      onSearch(searchTerm);
    }, 500);
  };

  // Cleanup function để đảm bảo clear timeout khi component unmount
  useEffect(() => {
    return () => clearTimeout(delayedSearch.current);
  }, []);

  // Render component SearchBar với ô input để người dùng nhập từ khóa tìm kiếm
  return (
    <div>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
        ref={searchInputRef}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar; 
