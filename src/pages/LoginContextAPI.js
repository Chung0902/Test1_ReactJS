import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ReCaptcha from "../components/ReCaptcha";

const LoginContextAPI = () => {
  const { isAuthenticated, loginSuccess } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    // Simulate fetching user credentials from local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      loginSuccess(user);
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("userPassword", user.password);
      navigate("/dashboardcontextAPI");
    } else {
      alert("Sai thông tin, vui lòng nhập lại...");
    }
  };

  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isHuman, setIsHuman] = useState(false);

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
      <form onSubmit={(e) => e.preventDefault()}>
        <label className="textip">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <br />
        <label className="textip1">
          Mật khẩu:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </label>
        <br />
        <ReCaptcha handleRecaptchaChange={handleRecaptchaChange} />
        <br />
        <button
          type="button"
          onClick={handleLogin}
          disabled={
            formData.email.trim() === "" ||
            formData.password.trim() === "" ||
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
