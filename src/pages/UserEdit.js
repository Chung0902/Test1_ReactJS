import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userlist } from "../data/userlist";
import { NavLink } from "react-router-dom";

const UserEdit = () => {
  const { id } = useParams(); // Lấy ID từ URL

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Lấy thông tin người dùng từ danh sách userlist dựa trên ID
    const selectedUser = userlist.find((user) => user.id === parseInt(id, 10));

    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h4>Sửa thông tin người dùng</h4>
      <form>
        <div>
          <label>ID:</label>
          <input type="text" value={user.id} readOnly />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={user.name} />
        </div>
        <div>
          <label>Age:</label>
          <input type="text" value={user.age} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={user.email} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={user.address} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={user.password} />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" value={user.gender} />
        </div>
        <button className="btn btn-primary" type="submit">Lưu</button>
        <NavLink to="/userlist">
          <button className="btn btn-secondary" type="button">Hủy</button>
        </NavLink>
      </form>
    </div>
  );
};

export default UserEdit;
