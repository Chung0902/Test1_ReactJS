import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function DashboardContextAPI() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Hello - Tôi là Admin</p>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <p>Vui lòng đăng nhập hệ thống</p>
      )}
    </div>
  );
}

export default DashboardContextAPI;
