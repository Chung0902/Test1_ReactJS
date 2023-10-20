import React, { useState } from "react";

const DeleteButton = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteClick = () => {
    const confirmed = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirmed) {
      // Thực hiện hành động xóa ở đây
      // Sau khi xóa xong, hiển thị thông báo xóa thành công
      setShowConfirmation(true);
    }
  };
  return (
    <button className="btn btn-danger" onClick={handleDeleteClick}>
      Delete
    </button>
  );
};

export default DeleteButton;
