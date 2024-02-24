import React, { useState, useEffect } from "react";
import "../styles/EnrollmentForm.css";

const EnrollmentForm = () => {
  const [selectedStudent, setSelectedStudent] = useState("Vui lòng chọn 1 sinh viên");
  const [additionalInput, setAdditionalInput] = useState("");
  const [students, setStudents] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchButtonDisabled, setSearchButtonDisabled] = useState(true);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
    setSearchResults(storedStudents);
  }, []);

  useEffect(() => {
    setSearchButtonDisabled(selectedStudent === "Vui lòng chọn 1 sinh viên");
  }, [selectedStudent]);

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  const handleSearch = () => {
    if (selectedStudent === "Vui lòng chọn 1 sinh viên") {
      setSearchResults([]); // Không hiển thị gì khi chưa chọn sinh viên
    } else {
      setSearchResults(
        students.filter((student) => student.name.toLowerCase() === selectedStudent.toLowerCase())
      );
    }
  };

  const finalizeEnrollment = () => {
    const selectedStudentInfo = students.find(
      (student) => student.name === selectedStudent
    );

    if (selectedStudentInfo) {
      const newStudent = {
        id: new Date().getTime(),
        name: selectedStudentInfo.name,
        age: selectedStudentInfo.age,
        additionalInfo: additionalInput,
      };

      const updatedStudents = [...students, newStudent];

      localStorage.setItem("students", JSON.stringify(updatedStudents));

      setStudents(updatedStudents);
      setSearchResults(updatedStudents);
      setSelectedStudent("Vui lòng chọn 1 sinh viên");
      setAdditionalInput("");
    } else {
      alert("Vui lòng chọn một sinh viên từ danh sách.");
    }
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="form-group">
          <h4 htmlFor="studentSelect">Chọn Sinh Viên</h4>
          <select
            id="studentSelect"
            className="form-control"
            value={selectedStudent}
            onChange={handleStudentChange}
          >
            <option value="Vui lòng chọn 1 sinh viên" disabled>
              Vui lòng chọn 1 sinh viên
            </option>
            {students.map((student) => (
              <option key={student.id} value={student.name}>
                {student.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          className="btn btn-primary EnrollmentForm"
          onClick={handleSearch}
          disabled={searchButtonDisabled}
        >
          Tìm kiếm
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className="mt-3">
          <h2>Danh Sách Sinh Viên</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Họ Tên</th>
                <th>Tuổi</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EnrollmentForm;
