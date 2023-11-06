import React, {useState, useEffect} from "react";
import { userlist } from "../data/userlist";
import DeleteButton from "../components/DeleteButton ";
import { NavLink } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Password</th>
            <th scope="col">Gender</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.password}</td>
              <td>{user.gender}</td>
              <td>
                <NavLink to={`/useredit/${user.id}`}>
                  <button type="button" className="btn btn-secondary">
                    Update
                  </button>
                </NavLink>

                <DeleteButton onDeleteClick={() => handleDeleteUser(user.id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;