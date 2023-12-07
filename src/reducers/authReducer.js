const initialState = {
  isAuthenticated: false,
  user: null,
  users: [],
  currentUserId: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log("LOGIN_SUCCESS action:", action);
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        user: action.user,
        // currentUserId: action.user.id, // Nếu bạn muốn giữ lại dòng này
      };
    case 'LOGOUT':
      console.log("LOGOUT action:", action);
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        currentUserId: null, // Đảm bảo set currentUserId về null khi đăng xuất
      };
    case 'REGISTER_USER':
      console.log("REGISTER_USER action:", action);
      return {
        ...state,
        users: action.users,
        currentUserId: action.currentUserId,
      };
    default:
      return state;
  }
};

export default authReducer;
