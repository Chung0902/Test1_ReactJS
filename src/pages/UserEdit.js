import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { userlist } from "../data/userlist";
import "../styles/useredit.css";


const UserEdit = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
    password: "",
    gender: "",
  });

  useEffect(() => {
    const selectedUser = userlist.find((user) => user.id === parseInt(id, 10));
    if (selectedUser) {
      setUser(selectedUser);
      setFormData({
        name: selectedUser.name,
        age: selectedUser.age,
        email: selectedUser.email,
        address: selectedUser.address,
        password: selectedUser.password,
        gender: selectedUser.gender,
      });
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Cập nhật thông tin người dùng ở đây, ví dụ, gửi dữ liệu lên API hoặc cơ sở dữ liệu.
    // Sau khi cập nhật thành công,có thể điều hướng người dùng đến trang `UserList` hoặc thực hiện các hành động khác.
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="userEdit">
      <h4>Sửa thông tin người dùng</h4>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" value={user.id} readOnly />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Lưu</button>
        <Link to="/userlist">
          <button type="button">Hủy</button>
        </Link>
      </form>
    </div>
  );
};

export default UserEdit;
