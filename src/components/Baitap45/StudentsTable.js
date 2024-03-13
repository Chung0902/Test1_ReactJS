import React, { useState, useEffect } from 'react';
import Student from './Student';
import Modal from 'react-modal';
import { useStudentContext } from '../../context/StudentContext';
import '../../styles/student.css';
import PopupEdit from './PopupEdit';
import Popup from './PopupAdd';
import SearchBar from './../Baitap44/SearchBar';
import useToast from './useToast'; // Import custom hook
import { Toast } from 'primereact/toast'; // Import Toast component from PrimeReact

const StudentsTable = () => {
  const { students, addStudent, deleteStudent, updateStudent } = useStudentContext();
  const { showToast, toastRef } = useToast(); // Use custom hook

  // Các state để quản lý trạng thái của component
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect để cập nhật danh sách sinh viên khi có sự thay đổi trong trạng thái students
  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  // Hàm xử lý tìm kiếm sinh viên
  const handleSearch = (term) => {
    setSearchTerm(term);

    // Lọc danh sách sinh viên dựa trên từ khóa tìm kiếm
    const results = students.filter((student) => {
      return student.name.toLowerCase().includes(term.toLowerCase());
    });

    setFilteredStudents(results);
  };

  // Hàm xử lý thêm mới sinh viên
  const handleAddStudent = (newStudent) => {
    const studentToAdd = { id: Date.now(), ...newStudent };
    addStudent(studentToAdd);
    closeModal();
    showToast('success', 'Success', 'Student added successfully'); // Hiển thị toast khi thêm sinh viên thành công
  };

  // Hàm xử lý sửa thông tin sinh viên
  const handleEditStudent = (editedStudent) => {
    updateStudent(editedStudent);
    closeModal();
    showToast('success', 'Success', 'Student updated successfully'); // Hiển thị toast khi sửa thông tin sinh viên thành công
  };

  // Hàm xử lý xóa sinh viên
  const handleDeleteStudent = async (id) => {
    if (window.confirm('Bạn chắc chắn muốn xóa không?')) {
      await deleteStudent(id);
      showToast('success', 'Success', 'Student deleted successfully'); // Hiển thị toast khi xóa sinh viên thành công
    }
  };

  // Hàm mở popup thêm mới hoặc sửa thông tin sinh viên
  const openModal = (action) => {
    setIsEditPopupOpen(action === 'edit');
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
    <>
      <div className="students">
        <button className="students" onClick={() => openModal('add')}>
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
                    openModal('edit');
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
          contentLabel={isEditPopupOpen ? 'Edit Student Modal' : 'Add Student Modal'}
        >
          <div>
            <h2>{isEditPopupOpen ? 'Edit Student' : 'Add Student'}</h2>
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
      {/* Hiển thị Toast component */}
      <Toast ref={toastRef} />
    </>
  );
};

export default StudentsTable;
