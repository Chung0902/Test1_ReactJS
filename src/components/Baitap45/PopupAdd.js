import React from 'react';
import '../../styles/student.css';


const Popup = ({ isOpen, onClose, onSubmit, initialValues }) => {
  // State để lưu trữ dữ liệu của sinh viên và cập nhật khi có thay đổi
  const [formData, setFormData] = React.useState(initialValues || {});

  // useEffect để cập nhật dữ liệu khi có sự thay đổi ở initialValues(giá trị ban đầu)
  React.useEffect(() => {
    setFormData(initialValues || {});
  }, [initialValues]);

  // Hàm xử lý khi giá trị của input thay đổi
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Hàm xử lý khi submit form
  const handleSubmit = () => {
    onSubmit(formData); // Gọi hàm xử lý submit từ component cha
    onClose(); // Đóng Popup
    setFormData({}); // Đặt formData về trạng thái rỗng để chuẩn bị cho lần thêm mới tiếp theo
  };

  // Giao diện của component Popup
  return (
    <div className='students' style={{ display: isOpen ? 'block' : 'none' }}>
      {/* Input để nhập tên sinh viên */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name || ''}
        onChange={handleChange}
        className='input'
      />

      {/* Input để nhập tuổi của sinh viên */}
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={formData.age || ''}
        onChange={handleChange}
        className='input'
      />

      <button onClick={handleSubmit}>Add student</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;
