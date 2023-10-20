import React from "react";
import chibiImage from "../images/chibi2.png";
import FormLogin from "../components/FormLogin";


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
          <FormLogin/>
        </div>
        <div className="child_1 image_1 table1">
          <img src={chibiImage} alt="chibi" />
        </div>
      </div>
    </div>
  );
};

export default Login;