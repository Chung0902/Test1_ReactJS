import React, { useState, useEffect } from "react";
import { CFormSelect, CButton } from "@coreui/react";

const FacultyForm = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("Choose 1 faculty member");
  const [faculties, setFaculties] = useState([]);
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
  const [facultyList, setFacultyList] = useState([]);

  useEffect(() => {
    // Giả sử dữ liệu cán bộ giáo viên được lưu trong local storage
    const storedFaculties = JSON.parse(localStorage.getItem("students")) || [];
    setFaculties(storedFaculties);
  }, []);

  useEffect(() => {
    setSaveButtonDisabled(selectedFaculty === "Choose 1 faculty member");
  }, [selectedFaculty]);

  const handleFacultyChange = (e) => {
    setSelectedFaculty(e.target.value);
  };

  const handleSave = () => {
    if (selectedFaculty === "Choose 1 faculty member") {
      alert("Please choose a faculty member from the list.");
    } else {
      const facultyInfo = faculties.find((faculty) => faculty.name === selectedFaculty);

      if (facultyInfo) {
        const updatedList = [...facultyList, facultyInfo];
        setFacultyList(updatedList);

        // Thực hiện logic lưu dữ liệu vào cơ sở dữ liệu (trong trường hợp thực tế, bạn có thể gọi API hoặc thao tác với cơ sở dữ liệu)
        alert(`Sinh viên đã lưu: ${selectedFaculty}`);
      }
    }
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="form-group">
          <label htmlFor="facultySelect">Thông tin sinh viên</label>
          <CFormSelect
            id="facultySelect"
            custom
            value={selectedFaculty}
            onChange={handleFacultyChange}
          >
            <option value="Choose 1 faculty member" disabled>
            Vui lòng chọn 1 sinh viên
            </option>
            {faculties.map((faculty) => (
              <option key={faculty.id} value={faculty.name}>
                {faculty.name}
              </option>
            ))}
          </CFormSelect>
        </div>

        <CButton
          type="button"
          color="primary"
          onClick={handleSave}
          disabled={saveButtonDisabled}
        >
          Save
        </CButton>
      </form>

      {facultyList.length > 0 && (
        <div className="mt-3">
          <h2>Danh sách sinh viên</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {facultyList.map((faculty, index) => (
                <tr key={index}>
                  <td>{faculty.id}</td>
                  <td>{faculty.name}</td>
                  <td>{faculty.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FacultyForm;
