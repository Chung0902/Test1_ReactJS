import React, { useState, useEffect } from 'react';

const PopupEdit = ({ isOpen, onClose, onSubmit, initialValues }) => {
  const [formData, setFormData] = useState(initialValues || {});

  useEffect(() => {
    setFormData(initialValues || {});
  }, [initialValues]);

  const handleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

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
