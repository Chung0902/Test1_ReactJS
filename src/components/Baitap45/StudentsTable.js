import React, { useState, useEffect } from "react";
import Student from "./Student";
import Modal from "react-modal";
import { useStudentContext } from "../../context/StudentContext";
import "../../styles/student.css";
import PopupEdit from "./PopupEdit";
import Popup from "./PopupAdd";
import SearchBar from "./../Baitap44/SearchBar";
import useToast from "./useToast";
import { Toast } from "primereact/toast";
import { ToastProvider } from "./ToastContext";

const StudentsTable = () => {
  const { students, addStudent, deleteStudent, updateStudent } =
    useStudentContext();
  const { showToast } = useToast();

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const results = students.filter((student) => {
      return student.name.toLowerCase().includes(term.toLowerCase());
    });
    setFilteredStudents(results);
  };

  const handleAddStudent = (newStudent) => {
    const studentToAdd = { id: Date.now(), ...newStudent };
    addStudent(studentToAdd);
    closeModal();
    showToast("success", "Success", "Student added successfully");
  };

  const handleEditStudent = (editedStudent) => {
    updateStudent(editedStudent);
    closeModal();
    showToast("success", "Success", "Student updated successfully");
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm("Bạn chắc chắn muốn xóa không?")) {
      await deleteStudent(id);
      showToast("success", "Success", "Student deleted successfully");
    }
  };

  const openModal = (action) => {
    setIsEditPopupOpen(action === "edit");
    setIsPopupOpen(true);
  };

  const closeModal = () => {
    setIsPopupOpen(false);
    setIsEditPopupOpen(false);
    setSelectedStudent(null);
  };

  const handleSubmit = (formData) => {
    if (!isEditPopupOpen) {
      handleAddStudent(formData);
    } else {
      handleEditStudent({ ...selectedStudent, ...formData });
    }
  };

  return (
    <ToastProvider>
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

        <Modal
          isOpen={isPopupOpen}
          onRequestClose={closeModal}
          contentLabel={
            isEditPopupOpen ? "Edit Student Modal" : "Add Student Modal"
          }
        >
          <div>
            <h2>{isEditPopupOpen ? "Edit Student" : "Add Student"}</h2>
            {isEditPopupOpen ? (
              <PopupEdit
                isOpen={isEditPopupOpen}
                onClose={closeModal}
                onSubmit={(formData) => {
                  handleEditStudent({ ...selectedStudent, ...formData });
                }}
                initialValues={selectedStudent}
              />
            ) : (
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
      <Toast /> {/* Hiển thị Toast component */}
    </ToastProvider>
  );
};

export default StudentsTable;
