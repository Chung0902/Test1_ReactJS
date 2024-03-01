import React, { useState, useEffect } from "react";
import Student from "./Student.js";
import Modal from "react-modal";
import {
  fetchStudents,
  addStudent,
  deleteStudent,
  updateStudent,
} from "../../utils/localStorageUtil.js";
import "../../styles/student.css";
import PopupEdit from "./PopupEdit.js";
import Popup from "../Baitap37/Popup.js";

// Component chính quản lý thông tin sinh viên
const StudentsTable = () => {
  // State để lưu trữ danh sách sinh viên và trạng thái của các popup
  const [students, setStudents] = useState(fetchStudents);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // useEffect để cập nhật danh sách sinh viên khi có sự thay đổi trong popup
  useEffect(() => {
    setStudents(fetchStudents());
  }, [isEditPopupOpen, isPopupOpen]);

  // Hàm xử lý thêm sinh viên
  const handleAddStudent = (newStudent) => {
    addStudent({ id: Date.now(), ...newStudent });
    closeModal();
  };

  // Hàm xử lý chỉnh sửa sinh viên
  const handleEditStudent = (editedStudent) => {
    updateStudent(editedStudent);
    closeModal();
  };

  // Hàm xử lý xóa sinh viên
  const handleDeleteStudent = (id) => {
    // Hiển thị cảnh báo xác nhận trước khi xóa
    if (window.confirm("Bạn chắc chắn muốn xóa không?")) {
      deleteStudent(id);
      setStudents(fetchStudents());
    }
  };

  // Hàm mở popup với mục đích thêm mới hoặc chỉnh sửa sinh viên
  const openModal = (action) => {
    setIsEditPopupOpen(action === "edit");
    setIsPopupOpen(true);
  };

  // Hàm đóng popup
  const closeModal = () => {
    setIsPopupOpen(false);
    setIsEditPopupOpen(false);
    setSelectedStudent(null);
  };

  // Hàm xử lý khi submit dữ liệu từ popup
  const handleSubmit = (formData) => {
    // Kiểm tra xem popup đang ở chế độ thêm mới hay chỉnh sửa
    if (!isEditPopupOpen) {
      // Nếu ở chế độ thêm mới, gọi hàm xử lý thêm mới sinh viên
      handleAddStudent(formData);
    } else {
      // Nếu ở chế độ chỉnh sửa, gọi hàm xử lý chỉnh sửa với dữ liệu được kết hợp giữa thông tin sinh viên đã chọn và dữ liệu mới từ form
      handleEditStudent({ ...selectedStudent, ...formData });
    }
  };

  // Giao diện của component
  return (
    <div className="students">
      <button className="students" onClick={() => openModal("add")}>
        New
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping qua danh sách sinh viên để hiển thị từng sinh viên */}
          {students.map((student) => (
            // Dùng hàm map để lặp qua mảng students và tạo một Student component cho mỗi sinh viên
            <Student
              key={student.id} // Key là một thuộc tính đặc biệt trong React để định danh mỗi phần tử trong danh sách
              {...student} // Sử dụng spread operator để truyền thông tin của sinh viên là các props của Student component
              onDelete={() => handleDeleteStudent(student.id)} // Hàm xử lý xóa được truyền qua prop onDelete
              onEdit={() => {
                setSelectedStudent(student); // Đặt thông tin sinh viên vào state selectedStudent khi chỉnh sửa
                openModal("edit"); // Mở cửa sổ popup ở chế độ chỉnh sửa
              }}
            />
          ))}
        </tbody>
      </table>

      {/* Cửa sổ popup sử dụng thư viện 'react-modal' */}
      <Modal
        isOpen={isPopupOpen} // Trạng thái mở hoặc đóng của cửa sổ modal
        onRequestClose={closeModal} // Hàm được gọi khi người dùng đóng cửa sổ modal
        contentLabel={
          isEditPopupOpen ? "Edit Student Modal" : "Add Student Modal"
        } // Mô tả nội dung của cửa sổ modal để người dùng hiểu nội dung chính là gì
      >
        <div>
          {/* Tiêu đề của popup tùy thuộc vào việc thêm mới hoặc chỉnh sửa sinh viên */}
          <h2>{isEditPopupOpen ? "Edit Student" : "Add Student"}</h2>

          {/* Nếu đang trong quá trình chỉnh sửa, sử dụng PopupEdit, ngược lại sử dụng Popup */}
          {isEditPopupOpen ? (
            // Sử dụng PopupEdit khi ở chế độ chỉnh sửa
            <PopupEdit
              isOpen={isEditPopupOpen}
              onClose={closeModal}
              onSubmit={(formData) => {
                handleEditStudent({ ...selectedStudent, ...formData });
              }}
              initialValues={selectedStudent}
            />
          ) : (
            // Sử dụng Popup khi ở chế độ thêm mới
            <Popup
              isOpen={isPopupOpen}
              onClose={closeModal}
              onSubmit={handleSubmit}
              initialValues={selectedStudent}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default StudentsTable;
