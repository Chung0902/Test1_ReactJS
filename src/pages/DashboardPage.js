import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../actions/authActions';
import LayoutBackend from '../components/layouts/LayoutBackend';

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
    <LayoutBackend>
      <div>
        {isAuthenticated ? (
          <div>
            <label>Hello - I am Admin</label>
            <button onClick={handleLogout}>Đăng xuất</button>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
          </div>
        ) : (
          <p>Vui lòng đăng nhập vào hệ thống</p>
        )}
      </div>
    </LayoutBackend>
  );
};

export default DashboardPage;
