import React, { useState } from 'react';
import PopupB from './PopupB';
import '../styles/Popup.css';


const DemoCoreUI = () => {
  // State để kiểm soát trạng thái mở/đóng Popup
  const [isPopupOpen, setPopupOpen] = useState(false);

  // State để lưu trữ đường dẫn hình ảnh được chọn từ Popup
  const [selectedImage, setSelectedImage] = useState(null);

  // Hàm mở Popup
  const openPopup = () => {
    setPopupOpen(true);
  };

  // Hàm đóng Popup
  const closePopup = () => {
    setPopupOpen(false);
  };

  // Hàm xử lý sự kiện khi hình ảnh được chọn từ Popup
  const handleImageSelection = (image) => {
    setSelectedImage(image);
    closePopup();
  };

  return (
    <div>
      <h1>Page A</h1>
      {/* Nút để mở Popup */}
      <button className='butonpagea' onClick={openPopup}>Open Popup</button>

      {/* Hiển thị hình ảnh đã chọn từ Popup */}
      {selectedImage && (
        <div>
          <h2>Selected Image:</h2>
          <img className='imgselected' src={selectedImage} alt="Selected" />
        </div>
      )}

      {/* Hiển thị Popup khi isPopupOpen là true */}
      {isPopupOpen && (
        <PopupB
          onClose={closePopup}
          onImageSelect={handleImageSelection}
        />
      )}
    </div>
  );
};

export default DemoCoreUI;
