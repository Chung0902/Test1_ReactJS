import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Kiểm tra trạng thái đăng nhập từ localStorage
  const isLoggedInFromStorage = localStorage.getItem('isAuthenticated');
  const isAuthenticated = isLoggedInFromStorage === 'true';

  const handleLogout = () => {
    dispatch(logout());
    // Xóa thông tin đăng nhập từ localStorage khi đăng xuất
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    navigate('/');
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <label>Hello - I am Admin</label>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <p>Vui lòng đăng nhập vào hệ thống</p>
      )}
    </div>
  );
};

export default DashboardPage;
