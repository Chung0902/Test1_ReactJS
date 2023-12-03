import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../actions/authActions";
import ReCaptcha from "./ReCaptcha";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);

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

    if (formData.email.trim() === "" || formData.password.trim() === "") {
      // Xử lý lỗi nếu cần
      return;
    }

    if (recaptchaValue === null) {
      // Xử lý lỗi nếu cần
      return;
    }

    // Simulate a successful login
    dispatch(loginSuccess(formData));


    // // Chuyển hướng đến trang Dashboard
    // navigate("/dashboard");
    if (isAuthenticated) {
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userPassword', formData.password);
      // Chuyển hướng đến trang Dashboard khi đăng nhập thành công
      navigate("/dashboard");
    } else {
      // Xử lý trường hợp đăng nhập thất bại (nếu cần)
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Đăng nhập thành công");
      console.log("Email:", formData.email);
      console.log("Password:", formData.password);
    }
  },[isAuthenticated, formData.email, formData.password]);

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

  const handleLogin = () => {
    // Simulate fetching user credentials from local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(u => u.email === formData.email && u.password === formData.password);

    if (user) {
      dispatch(loginSuccess(user));
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userPassword', user.password);
      navigate('/dashboard');
    } else {
      alert('Sai thông tin, vui lòng nhập lại...');
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
          onClick={handleLogin}
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

export default FormLogin;
