import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/useredit.css";

const UserEdit = () => {
  const { id } = useParams();
  const [editedUser, setEditedUser] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
    address: "",
    password: "",
    gender: "",
  });

  const [userList, setUserList] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isDataChanged, setIsDataChanged] = useState(false);
  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("users"));
    setUserList(user);

    const selectedUser = user.find((user) => user.id === parseInt(id));
    setEditedUser(selectedUser);
  }, [id]);

  const showSuccessAlert = () => {
    // Hiển thị thông báo cập nhật thành công bằng `window.confirm`
    const confirmed = window.confirm("Cập nhật thành công! Bấm OK để chuyển đến trang userlist.");
    if (confirmed) {
      // Người dùng đã bấm OK, chuyển hướng về trang "userlist"
      window.location.href = "/userlist";
    }
  };
  
  const handleSave = () => {
    // Kiểm tra xem có sự thay đổi nào đã xảy ra
    if (isDataChanged) {
      // Cập nhật thông tin người dùng trong localStorage hoặc gửi lên máy chủ
      const updatedUsers = userList.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        }
        return user;
      });
  
      localStorage.setItem('users', JSON.stringify(updatedUsers));
  
      // Hiển thị thông báo cập nhật thành công bằng `showSuccessAlert`
      showSuccessAlert();
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
    setIsDataChanged(true);
  };

  return (
    <div className="userEdit">
      <h4>Sửa thông tin người dùng</h4>
      <form>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={editedUser.id} readOnly />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={editedUser.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={editedUser.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={editedUser.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={editedUser.gender}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Lưu
        </button>
        <Link to="/userlist">
          <button type="button">Hủy</button>
        </Link>
      </form>
    </div>
  );
};

export default UserEdit;
