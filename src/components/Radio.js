import React from "react";
import { useFormik } from "formik";

const Radio = ({ handleGenderChange }) => {
  const formik = useFormik({
    initialValues: {
      gender: "nam" // Mặc định chọn "Nam"
    },
  });

  const handleRadioChange = (e) => {
    const selectedGender = e.target.value;
    handleGenderChange(selectedGender);
    formik.setFieldValue("gender", selectedGender); // Cập nhật giới tính trong formik (nếu cần)
  };

  return (
    <div>
      <form className="radio">
        <input
          type="radio"
          name="gender"
          id="nam"
          value="nam"
          checked={formik.values.gender === "nam"}
          onChange={handleRadioChange}
          className="nam"
        />
        <label htmlFor="nam">Nam</label>
        <input
          type="radio"
          name="gender"
          id="nu"
          value="Nữ"
          checked={formik.values.gender === "Nữ"}
          onChange={handleRadioChange}
          className="nu"
        />
        <label htmlFor="nu">Nữ</label>
      </form>
    </div>
  );
};

export default Radio;
