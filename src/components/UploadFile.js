import React, { useState } from "react";
import "../styles/uploadfile.css";

const UploadFile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
        const fileName = file.name;
        const fileExtension = fileName.split(".").pop().toLowerCase();
        if (fileExtension === "jpg" || fileExtension === "jpeg" || fileExtension === "png") {
          setSelectedImage(URL.createObjectURL(file));
          setErrorMessage("");
        } else {
          setSelectedImage(null);
          setErrorMessage("Chỉ hỗ trợ định dạng JPG và PNG");
        }
      } else {
        setSelectedImage(null);
        setErrorMessage("");
      }
  };
  return (
    <div className="container">
      <div className="mt-5 row">
        <div className="col-md-6 mx-auto d-block">
            {selectedImage && <img className="rounded mx-auto d-block border border-primary shadow" src={selectedImage} alt="Uploaded" width={"400px"} height={"auto"}/>}
            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
            {!selectedImage && !errorMessage && (
            <p className="text-muted">Vui lòng chọn một tệp tin hình ảnh (JPG hoặc PNG)</p>
            )}
        </div>
        <input className="mx-auto d-block mt-3 form-control"
          type="file"
        //   accept=".jpg, .png"
          onChange={handleImageChange}
          width={"500px"}
        />
      </div>
    </div>
  );
};

export default UploadFile;