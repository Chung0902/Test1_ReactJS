import React from "react";
import { userlist } from "../data/userlist";
import DeleteButton from "../components/DeleteButton ";
import { NavLink } from "react-router-dom";

const UserList = () => {
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
          {userlist.map((user) => (
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

                <DeleteButton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
