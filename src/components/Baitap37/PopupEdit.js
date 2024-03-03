import React, { useState, useEffect } from 'react';

const PopupEdit = ({ isOpen, onClose, onSubmit, initialValues }) => {
  // State để lưu trữ dữ liệu của form và khởi tạo giá trị ban đầu từ prop initialValues
  const [formData, setFormData] = useState(initialValues || {});

  // useEffect để cập nhật giá trị form khi initialValues thay đổi
  useEffect(() => {
    setFormData(initialValues || {});
  }, [initialValues]);

  // Hàm xử lý sự kiện khi input thay đổi
  const handleChange = (e) => {
    // Sử dụng callback function để đảm bảo rằng prevState là bản sao mới nhất của state
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  // Hàm xử lý sự kiện khi submit form
  const handleSubmit = () => {
    // Gọi hàm onSubmit với dữ liệu của form và đóng cửa sổ popup
    onSubmit(formData);
    onClose();
  };

  // Giao diện của component PopupEdit
  return (
    <div className='students' style={{ display: isOpen ? 'block' : 'none' }}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formData.age || ''}
          onChange={handleChange}
        />
      </label>

      <button onClick={handleSubmit}>Update student</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopupEdit;
