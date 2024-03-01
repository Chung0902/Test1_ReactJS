// Popup.js
import React from 'react';
import '../../styles/student.css';

const Popup = ({ isOpen, onClose, onSubmit, initialValues }) => {
  const [formData, setFormData] = React.useState(initialValues || {});

  React.useEffect(() => {
    setFormData(initialValues || {});
  }, [initialValues]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
    setFormData({}); // Đặt formData về trạng thái rỗng
  };

  return (
    <div className='students' style={{ display: isOpen ? 'block' : 'none' }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name || ''}
        onChange={handleChange}
        className='input'
      />
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
