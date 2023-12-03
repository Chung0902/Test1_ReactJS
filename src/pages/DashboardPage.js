// DashboardPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    navigate('/');
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <label>Hello - Tôi là Admin</label>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <p>Vui lòng đăng nhập hệ thống</p>
      )}
    </div>
  );
};

export default DashboardPage;
