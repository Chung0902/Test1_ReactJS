import React from "react";
import ReCaptcha from "../components/ReCaptcha";
import chibiImage from "../images/chibi2.png";


const Login = () => {
  return (
    <div className="container1">
      <div className="image">
        <img src={chibiImage} alt="chibi" />
      </div>
      <div className="falther">
        <div className="child_1">
          <h1 className="the_h1">Đăng nhập</h1>
          <p className="the_p">Đăng nhập tài khoản của bạn</p>
          <ReCaptcha />
        </div>
        <div className="child_1 image_1 table1">
          <img src={chibiImage} alt="chibi" />
        </div>
      </div>
    </div>
  );
};

export default Login;
