import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Tạo context để chứa trạng thái và các hàm xử lý liên quan đến sinh viên
const StudentContext = createContext();

// Reducer xử lý các action liên quan đến sinh viên
const studentReducer = (state, action) => {
  switch (action.type) {
    // Action để cập nhật danh sách sinh viên
    case 'SET_STUDENTS':
      return { ...state, students: action.payload };
    // Action để thêm mới sinh viên
    case 'ADD_STUDENT':
      return { ...state, students: [...state.students, action.payload] };
    // Action để cập nhật thông tin sinh viên
    case 'UPDATE_STUDENT':
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
      };
    // Action để xóa sinh viên
    case 'DELETE_STUDENT':
      return {
        ...state,
        students: state.students.filter((student) => student.id !== action.payload),
      };
    default:
      return state;
  }
};

// Provider chứa logic xử lý cho context và truyền context xuống các component con
export const StudentProvider = ({ children }) => {
  // Sử dụng useReducer để quản lý trạng thái và dispatch action
  const [state, dispatch] = useReducer(studentReducer, {
    students: [],
  });

  // Hàm lấy danh sách sinh viên từ localStorage
  const fetchStudents = () => {
    const studentsRaw = localStorage.getItem('students');
    return studentsRaw ? JSON.parse(studentsRaw) : [];
  };

  // useEffect để khởi tạo danh sách sinh viên từ localStorage khi component được render
  useEffect(() => {
    const initialStudents = fetchStudents();
    dispatch({ type: 'SET_STUDENTS', payload: initialStudents });
  }, []);

  // Hàm cập nhật danh sách sinh viên trong context và lưu vào localStorage
  const setStudents = (students) => {
    localStorage.setItem('students', JSON.stringify(students));
    dispatch({ type: 'SET_STUDENTS', payload: students });
  };

  // Hàm thêm mới sinh viên vào danh sách và cập nhật localStorage
  const addStudent = (newStudent) => {
    const updatedStudents = [...state.students, newStudent];
    setStudents(updatedStudents);
  };

  // Hàm cập nhật thông tin sinh viên trong danh sách và cập nhật localStorage
  const updateStudent = (updatedStudent) => {
    const updatedStudents = state.students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
  };

  // Hàm xóa sinh viên khỏi danh sách và cập nhật localStorage
  const deleteStudent = (studentId) => {
    const updatedStudents = state.students.filter((student) => student.id !== studentId);
    setStudents(updatedStudents);
  };

  // Giá trị của context được truyền xuống các component con
  const contextValue = {
    students: state.students,
    setStudents,
    fetchStudents,
    addStudent,
    updateStudent,
    deleteStudent,
  };

  // Trả về Provider với giá trị là contextValue
  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};

// Hook custom để sử dụng context trong các component con
export const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudentContext must be used within a StudentProvider');
  }
  return context;
};
