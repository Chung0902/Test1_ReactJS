import React, { useState, useEffect } from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
} from "@react-oauth/google";
import chibiImage from "../images/chibi2.png";

const LoginGoogleOAuth = () => {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    // Xử lý thành công khi người dùng đăng nhập
    console.log("Đăng nhập thành công!", credentialResponse);

    // Lấy thông tin người dùng (ví dụ: tên)
    const userDisplayName = credentialResponse.displayName;
    setUser(userDisplayName);
  };

  return (
    <div className="container1">
      <div className="image">
        <img src={chibiImage} alt="chibi" />
      </div>
      <div className="falther">
        <div className="child_1">
          <h1 className="the_h1">Đăng nhập</h1>
          <p className="the_p">Đăng nhập tài khoản học viên của bạn</p>
          <GoogleOAuthProvider clientId="1042764903654-2qfaieks9up73ut0350qavf446p3io6j.apps.googleusercontent.com">
            <div>
              {user ? (
                <div>
                  <p>Chào mừng, {user}!</p>
                  <button onClick={() => setUser(null)}>Đăng xuất</button>
                </div>
              ) : (
                <div className="google">
                  <GoogleLogin onSuccess={handleLoginSuccess} />
                </div>
              )}
            </div>
          </GoogleOAuthProvider>
          <button type="submit" className="btn btn-primary btncance">
            Về lại trang chủ
          </button>
        </div>
        <div className="child_1 image_1 table1">
          <img src={chibiImage} alt="chibi" />
        </div>
      </div>
    </div>
  );
};

export default LoginGoogleOAuth;
