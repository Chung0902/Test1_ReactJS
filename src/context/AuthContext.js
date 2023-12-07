import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Lưu trạng thái đăng nhập vào localStorage khi có thay đổi
    localStorage.setItem('isAuthenticated', state.isAuthenticated);
  }, [state.isAuthenticated]);

  const loginSuccess = (user) => {
    dispatch({ type: 'LOGIN_SUCCESS', user });
  
    // Lưu trạng thái đăng nhập vào localStorage khi đăng nhập thành công
    localStorage.setItem('isAuthenticated', true);
    localStorage.setItem('userEmail', user.email);
    
    console.log('localStorage after login:', localStorage);
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    // Xóa trạng thái đăng nhập khi người dùng đăng xuất
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
  };

  return (
    <AuthContext.Provider value={{ ...state, loginSuccess, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Xuất AuthProvider cùng với các thứ khác
export { AuthProvider, useAuth, AuthContext };
