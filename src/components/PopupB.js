import React, { useState } from 'react';
import '../styles/Popup.css';

const PopupB = ({ onClose, onImageSelect }) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const submitImage = () => {
    if (uploadedImage) {
      onImageSelect(uploadedImage);
    }
  };

  return (
    <div className="popup">
      <h2>Popup B</h2>
      <input type="file" onChange={handleImageUpload} />

      {/* Thiết lập kích thước cố định cho hình ảnh */}
      {uploadedImage && <img className="uploaded-image" src={uploadedImage} alt="Uploaded" />}

      <button onClick={submitImage}>Submit</button>
      <button onClick={onClose}>Close Popup</button>
    </div>
  );
};

export default PopupB;
