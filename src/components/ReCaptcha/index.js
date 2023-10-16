import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { NavLink } from "react-router-dom";

const ReCaptcha = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isHuman, setIsHuman] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleEmailBlur = () => {
    if (formData.email.trim() === "") {
      setErrors({ ...errors, email: "Vui lòng nhập email" });
    } else {
      setErrors({ ...errors, email: "" });
    }
  };

  const handlePasswordBlur = () => {
    if (formData.password.trim() === "") {
      setErrors({ ...errors, password: "Vui lòng nhập mật khẩu" });
    } else {
      setErrors({ ...errors, password: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email.trim() === "") {
      setErrors({ ...errors, email: "Vui lòng nhập email" });
      return;
    }

    if (formData.password.trim() === "") {
      setErrors({ ...errors, password: "Vui lòng nhập mật khẩu" });
      return;
    }

    if (recaptchaValue === null) {
      return;
    }

    // Xử lý đăng nhập hoặc gửi dữ liệu lên máy chủ
    // Ở đây, thay vì làm thực tế, chúng ta giả định rằng đăng nhập thành công.
    setLoginSuccess(true);
  };
  useEffect(() => {
    if (loginSuccess) {
      console.log("Đăng nhập thành công");
      console.log("Email:", formData.email);
      console.log("Password:", formData.password);
    }
  }, [loginSuccess, formData.email, formData.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);

    if (value !== null) {
      setIsHuman(true);
    } else {
      setIsHuman(false);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label className="textip">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </label>
        <br />
        <label className="textip1">
          Mật khẩu:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handlePasswordBlur}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </label>
        <br />
        <div className="captcha">
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={handleRecaptchaChange}
            hl="vi" // Thêm thuộc tính này để đặt ngôn ngữ thành tiếng Việt
          />
        </div>

        <br />
        <button
          type="submit"
          disabled={
            formData.email.trim() === "" ||
            formData.password.trim() === "" ||
            recaptchaValue === null
          }
          className="btn btn-primary"
        >
          Đăng nhập
        </button>
        <NavLink to="/register">
          <p className="register">Đăng ký nếu chưa có tài khoản</p>
        </NavLink>
      </form>
    </div>
  );
};

export default ReCaptcha;
