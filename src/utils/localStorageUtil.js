const STORAGE_KEY = 'students';

export const fetchStudents = () => {
  const studentsRaw = localStorage.getItem(STORAGE_KEY);
  return studentsRaw ? JSON.parse(studentsRaw) : [];
};

export const saveStudents = (students) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
};

export const addStudent = (student) => {
  const students = fetchStudents();
  students.push(student);
  saveStudents(students);
};

export const deleteStudent = (studentId) => {
  let students = fetchStudents();
  students = students.filter((student) => student.id !== studentId);
  saveStudents(students);
};

export const updateStudent = (updatedStudent) => {
  let students = fetchStudents();
  const index = students.findIndex((s) => s.id === updatedStudent.id);
  if (index !== -1) {
    students[index] = updatedStudent;
    saveStudents(students);
  }
};
