import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ReCaptcha from "./ReCaptcha";

const LoginContextAPI = () => {
  const { isAuthenticated, loginSuccess } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const handleEmailBlur = () => {
    setErrors({
      ...errors,
      email: formData.email.trim() === "" ? "Vui lòng nhập email" : "",
    });
  };

  const handlePasswordBlur = () => {
    setErrors({
      ...errors,
      password: formData.password.trim() === "" ? "Vui lòng nhập mật khẩu" : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email.trim() === "" || formData.password.trim() === "") {
      setErrors({
        email: formData.email.trim() === "" ? "Vui lòng nhập email" : "",
        password:
          formData.password.trim() === "" ? "Vui lòng nhập mật khẩu" : "",
      });
      return;
    }

    if (recaptchaValue === null) {
      // Xử lý lỗi nếu cần
      return;
    }

    // Mô phỏng thông tin tìm nạp người dùng từ lưu trữ cục bộ
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      loginSuccess(user);
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("isAuthenticated", true); // Lưu trạng thái đăng nhập vào localStorage
      navigate("/dashboardcontextAPI");
    } else {
      alert("Sai thông tin, vui lòng nhập lại...");
    }
  };

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
        <ReCaptcha handleRecaptchaChange={handleRecaptchaChange} />
        <br />
        <button
          type="submit"
          disabled={
            formData.email.trim() === "" ||
            formData.password.trim() === "" ||
            recaptchaValue === null ||
            isAuthenticated
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

export default LoginContextAPI;