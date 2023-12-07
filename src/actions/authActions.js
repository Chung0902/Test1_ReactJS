export const loginSuccess = (user) => {
  console.log("loginSuccess action:", user);
  return {
    type: 'LOGIN_SUCCESS',
    isAuthenticated: true,
    user,
  };
};

export const logout = () => {
  console.log("logout action");
  return {
    type: 'LOGOUT',
  };
};

export const registerUser = (users, currentUser) => {
  console.log("registerUser action:", users, currentUser);
  return {
    type: 'REGISTER_USER',
    users,
    currentUserId: currentUser ? currentUser.id : null,
  };
};
