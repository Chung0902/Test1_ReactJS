import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function DashboardContextAPI() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated');
    console.log('isLoggedIn:', isLoggedIn);

    if (isLoggedIn === 'true' && isAuthenticated) {
      console.log('User is authenticated.');
    } else {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();

    // Xóa trạng thái đăng nhập khi người dùng đăng xuất
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  if (!isAuthenticated) {
    return <p>Vui lòng đăng nhập vào hệ thống</p>;
  }

  return (
    <div>
      <p>Hello - I am Admin</p>
      <button onClick={handleLogout}>Đăng xuất</button>
    </div>
  );
}

export default DashboardContextAPI;