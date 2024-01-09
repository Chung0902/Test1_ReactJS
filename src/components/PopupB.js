import React, { useState } from "react";
import "../styles/Popup.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from './LanguageSelector';

const PopupB = ({ onClose, onImageSelect }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [fileName, setFileName] = useState(""); // State để lưu tên file đã chọn

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      setFileName(file.name); // Cập nhật tên file
    }
  };

  const submitImage = () => {
    if (uploadedImage) {
      onImageSelect(uploadedImage);
    }
  };

  //Thay đổi ngôn ngữ
  const { t } = useTranslation();

  return (
    <div className="popup">
      <h2>{t("popupB")}</h2>
      <div className="file-input">
        <input type="file" id="file" onChange={handleImageUpload} style={{ display: 'none' }} />
        <label htmlFor="file" className="file-label">
          {fileName || t("chooseFile")} {/* Hiển thị tên file hoặc văn bản mặc định */}
        </label>
        {!fileName && <span className="no-file-chosen-text">{t("noFileChosen")}</span>}
      </div>

      {/* Thiết lập kích thước cố định cho hình ảnh */}
      {uploadedImage && <img className="uploaded-image" src={uploadedImage} alt="Uploaded" />}
      
      <button onClick={submitImage}>{t("submit")}</button>
      <button onClick={onClose}>{t("closepopup")}</button>

      
      
    </div>
  );
};

export default PopupB;
