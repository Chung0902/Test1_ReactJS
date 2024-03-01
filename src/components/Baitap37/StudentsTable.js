// StudentsTable.js
import React, { useState, useEffect } from 'react';
import Student from '../Student.js';
import Modal from 'react-modal';
import {
  fetchStudents,
  addStudent,
  deleteStudent,
  updateStudent,
} from '../../utils/localStorageUtil.js';
import '../../styles/student.css';
import PopupEdit from './PopupEdit.js';
import Popup from '../Baitap37/Popup.js';

const StudentsTable = () => {
  const [students, setStudents] = useState(fetchStudents);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setStudents(fetchStudents());
  }, [isEditPopupOpen, isPopupOpen]);

  const handleAddStudent = (newStudent) => {
    addStudent({ id: Date.now(), ...newStudent });
    closeModal();
  };

  const handleEditStudent = (editedStudent) => {
    updateStudent(editedStudent);
    closeModal();
  };

  const handleDeleteStudent = (id) => {
    if (window.confirm('Bạn chắc chắn muốn xóa không?')) {
      deleteStudent(id);
      setStudents(fetchStudents());
    }
  };

  const openModal = (action) => {
    setIsEditPopupOpen(action === 'edit');
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
    <div className='students'>
      <button className='students' onClick={() => openModal('add')}>New</button>
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
          {students.map((student) => (
            <Student
              key={student.id}
              {...student}
              onDelete={() => handleDeleteStudent(student.id)}
              onEdit={() => {
                setSelectedStudent(student);
                openModal('edit');
              }}
            />
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isPopupOpen}
        onRequestClose={closeModal}
        contentLabel={isEditPopupOpen ? 'Edit Student Modal' : 'Add Student Modal'}
      >
        <div>
          <h2>{isEditPopupOpen ? 'Edit Student' : 'Add Student'}</h2>
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
  );
};

export default StudentsTable;
