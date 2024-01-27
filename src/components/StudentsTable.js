// StudentsTable.js
import React from 'react';
import Student from './Student';
import Popup from './Popup';
import {
  fetchStudents,
  saveStudents,
  addStudent,
  deleteStudent,
  updateStudent,
} from '../../src/utils/localStorageUtil.js';
import '../styles/student.css';

const StudentsTable = () => {
  const [students, setStudents] = React.useState(fetchStudents);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [selectedStudent, setSelectedStudent] = React.useState(null);

  const handleAddStudent = (newStudent) => {
    addStudent({ id: Date.now(), ...newStudent });
    setStudents(fetchStudents());
  };

  const handleEditStudent = (editedStudent) => {
    updateStudent(editedStudent);
    setStudents(fetchStudents());
  };

  const handleDeleteStudent = (id) => {
    if (window.confirm('Bạn chắc chắn muốn xóa không?')) {
      deleteStudent(id);
      setStudents(fetchStudents());
    }
  };

  return (
    <div>
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
              onDelete={handleDeleteStudent}
              onEdit={(id) => {
                setSelectedStudent(students.find((s) => s.id === id));
                setIsPopupOpen(true);
              }}
            />
          ))}
        </tbody>
      </table>
      <button onClick={() => setIsPopupOpen(true)}>New</button>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
          setSelectedStudent(null);
        }}
        onSubmit={(formData) => {
          if (selectedStudent) {
            handleEditStudent({ ...selectedStudent, ...formData });
          } else {
            handleAddStudent(formData);
          }
        }}
        initialValues={selectedStudent}
      />
    </div>
  );
};

export default StudentsTable;
