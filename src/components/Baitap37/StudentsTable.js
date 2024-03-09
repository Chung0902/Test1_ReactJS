import React, { useState, useEffect } from "react";
import Student from "./Student.js"; 
import Modal from "react-modal"; 
import { fetchStudents, addStudent, deleteStudent, updateStudent } from "../../utils/localStorageUtil.js";  
import "../../styles/student.css"; 
import PopupEdit from "./PopupEdit.js"; 
import Popup from "./PopupAdd.js"; 
import SearchBar from './../Baitap44/SearchBar'; 

const StudentsTable = () => {
  // Khai báo các state sử dụng trong component
  const [students, setStudents] = useState([]);  
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);  
  const [isPopupOpen, setIsPopupOpen] = useState(false);  
  const [filteredStudents, setFilteredStudents] = useState([]);  // Danh sách sinh viên được lọc dựa trên kết quả tìm kiếm
  const [searchTerm, setSearchTerm] = useState("");  // Từ khóa tìm kiếm

  useEffect(() => {
    // Sử dụng useEffect để fetch dữ liệu sinh viên từ localStorage khi có sự thay đổi trong trạng thái của các popup
    const fetchData = async () => {
      const data = await fetchStudents();  // Hàm fetchStudents trả về danh sách sinh viên
      setStudents(data);
      setFilteredStudents(data);
    };

    fetchData();
  }, [isEditPopupOpen, isPopupOpen]);

  // Hàm xử lý tìm kiếm sinh viên
  const handleSearch = async (term) => {
    setSearchTerm(term);

    const data = await fetchStudents();  // Fetch lại danh sách sinh viên từ  localStorage

    // Lọc sinh viên dựa trên từ khóa tìm kiếm
    const results = data.filter((student) => {
      return student.name.toLowerCase().includes(term.toLowerCase());
    });

    setFilteredStudents(results);
  };

  // Hàm xử lý thêm mới sinh viên
  const handleAddStudent = (newStudent) => {
    const studentToAdd = { id: Date.now(), ...newStudent };  // Tạo đối tượng sinh viên mới với id là thời điểm hiện tại
    addStudent(studentToAdd);  // Gọi hàm addStudent từ localStorageUtil để thêm sinh viên mới
    closeModal();
  };

  // Hàm xử lý sửa thông tin sinh viên
  const handleEditStudent = (editedStudent) => {
    updateStudent(editedStudent);  // Gọi hàm updateStudent từ localStorageUtil để cập nhật thông tin sinh viên
    closeModal();
  };

  // Hàm xử lý xóa sinh viên
const handleDeleteStudent = async (id) => {
  // Hiển thị cảnh báo xác nhận trước khi xóa
  if (window.confirm("Bạn chắc chắn muốn xóa không?")) {
    // Gọi hàm deleteStudent từ localStorageUtil để xóa sinh viên
    await deleteStudent(id);

    // Cập nhật lại danh sách sinh viên
    const updatedStudents = await fetchStudents();
    setStudents(updatedStudents);
    
    // Lọc lại danh sách sinh viên dựa trên từ khóa tìm kiếm
    const filteredResults = updatedStudents.filter((student) => {
      return student.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredStudents(filteredResults);
  }
};


  // Hàm mở popup thêm mới hoặc sửa thông tin sinh viên
  const openModal = (action) => {
    setIsEditPopupOpen(action === "edit");  // Xác định xem là mở popup sửa thông tin hay thêm mới
    setIsPopupOpen(true);
  };

  // Hàm đóng popup
  const closeModal = () => {
    setIsPopupOpen(false);
    setIsEditPopupOpen(false);
    setSelectedStudent(null);
  };

  // Hàm xử lý submit form trong popup
  const handleSubmit = (formData) => {
    // Nếu không phải là mở popup sửa thông tin, thì thực hiện thêm mới sinh viên
    if (!isEditPopupOpen) {
      handleAddStudent(formData);
    } else {
      // Ngược lại, thực hiện sửa thông tin sinh viên đã chọn
      handleEditStudent({ ...selectedStudent, ...formData });
    }
  };

  // Render component StudentsTable
  return (
    <div className="students">
      <button className="students" onClick={() => openModal("add")}>
        New
      </button>
      <SearchBar onSearch={handleSearch} />
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
          {filteredStudents.length > 0 ? (
            // Hiển thị danh sách sinh viên hoặc thông báo khi không có kết quả tìm kiếm
            filteredStudents.map((student) => (
              <Student
                key={student.id}
                {...student}
                onDelete={() => handleDeleteStudent(student.id)}
                onEdit={() => {
                  setSelectedStudent(student);
                  openModal("edit");
                }}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4">Không có kết quả tìm kiếm.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Hiển thị popup thêm mới hoặc sửa thông tin sinh viên */}
      <Modal
        isOpen={isPopupOpen}
        onRequestClose={closeModal}
        contentLabel={isEditPopupOpen ? "Edit Student Modal" : "Add Student Modal"}
      >
        <div>
          <h2>{isEditPopupOpen ? "Edit Student" : "Add Student"}</h2>
          {isEditPopupOpen ? (
            // Nếu là popup sửa thông tin, render component PopupEdit
            <PopupEdit
              isOpen={isEditPopupOpen}
              onClose={closeModal}
              onSubmit={(formData) => {
                handleEditStudent({ ...selectedStudent, ...formData });
              }}
              initialValues={selectedStudent}
            />
          ) : (
            // Ngược lại, render component Popup để thêm mới sinh viên
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
