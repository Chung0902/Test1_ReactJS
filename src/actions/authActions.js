// authActions.js
export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  isAuthenticated: true,
  user,
});

export const logout = () => ({
  type: 'LOGOUT',
});
