// // Profile.js
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import LayoutBackend from '../components/layouts/LayoutBackend';
// import { registerUser } from '../actions/authActions';

// const Profile = () => {
//   const dispatch = useDispatch();

//   // Lấy thông tin người dùng từ Redux store
//   const users = useSelector((state) => state.auth.users);
//   const currentUserId = useSelector((state) => state.auth.currentUserId);

//   // Tự động cập nhật Redux store từ local storage khi component được render
//   useEffect(() => {
//     // Lấy dữ liệu từ local storage
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

//     // Thực hiện action để cập nhật Redux store
//     dispatch(registerUser(storedUsers));
//   }, [dispatch]);

//   return (
//     <LayoutBackend>
//       <h2>Trang Hồ sơ</h2>
//       <div>
//         {users.length > 0 ? (
//           <ul>
//             {users.map((user) => (
//               <li key={user.id}>
//                 <p><strong>Họ và tên:</strong> {user.name}</p>
//                 <p><strong>Tuổi:</strong> {user.age}</p>
//                 <p><strong>Giới tính:</strong> {user.gender}</p>
//                 <p><strong>Email:</strong> {user.email}</p>
//                 <p><strong>Địa chỉ:</strong> {user.address}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Không có thông tin người dùng.</p>
//         )}
//       </div>
//     </LayoutBackend>
//   );
// };

// export default Profile;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LayoutBackend from "../components/layouts/LayoutBackend";
import { registerUser } from "../actions/authActions";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();

  // Lấy thông tin người dùng từ Redux store
  const currentUser = useSelector((state) => state.auth.user);

  // Tự động cập nhật Redux store từ local storage khi component được render
  useEffect(() => {
    // Lấy dữ liệu từ local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Thực hiện action để cập nhật Redux store
    dispatch(registerUser(storedUsers));
  }, [dispatch]);

  return (
    <LayoutBackend>
      <div className="profile">
        <h2>Profile</h2>
        <div className="childprofile">
          {currentUser ? (
            <ul>
              <li key={currentUser.id}>
                <p>
                  <strong>Họ và tên:</strong> {currentUser.name}
                </p>
                <p>
                  <strong>Tuổi:</strong> {currentUser.age}
                </p>
                <p>
                  <strong>Giới tính:</strong> {currentUser.gender}
                </p>
                <p>
                  <strong>Email:</strong> {currentUser.email}
                </p>
                <p>
                  <strong>Địa chỉ:</strong> {currentUser.address}
                </p>
              </li>
            </ul>
          ) : (
            <p>Không có thông tin người dùng.</p>
          )}
        </div>
        <Link to="/dashboard">
          <button className="childprofileb">Trở về</button>
        </Link>
      </div>
    </LayoutBackend>
  );
};

export default Profile;
