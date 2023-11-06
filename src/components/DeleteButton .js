import React, { useState } from "react";

const DeleteButton = ({ onDeleteClick }) => {
  const handleDeleteClick = () => {
    const confirmed = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirmed) {
      onDeleteClick(); // Gọi hàm xóa người dùng thông qua prop
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDeleteClick}>
      Xóa
    </button>
  )
};

export default DeleteButton;
