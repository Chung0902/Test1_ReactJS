import React, { useState } from 'react';
import PopupB from './PopupB';
import '../styles/Popup.css';

const DemoCoreUI = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleImageSelection = (image) => {
    setSelectedImage(image);
    closePopup();
  };

  return (
    <div>
      <h1>Page A</h1>
      <button className='butonpagea' onClick={openPopup}>Open Popup</button>

      {selectedImage && (
        <div>
          <h2>Selected Image:</h2>
          <img className='imgselected' src={selectedImage} alt="Selected" />
        </div>
      )}

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
