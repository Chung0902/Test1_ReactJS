import React, { useState, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import chibiImage from "../images/chibi2.png";
import { jwtDecode } from "jwt-decode";

const LoginGoogleOAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    console.log("Đăng nhập thành công!", credentialResponse);

    if (credentialResponse && credentialResponse.profileObj) {
      const userDisplayName = credentialResponse.profileObj.name;
      setUser(userDisplayName);
      setIsLoggedIn(true);
    } else {
      console.error("Không tìm thấy thông tin người dùng");
      // Xử lý lỗi hoặc hiển thị thông báo lỗi ở đây
    }
  };

  const handleLoginError = (error) => {
    console.log("Đăng nhập thất bại", error);
    // Xử lý lỗi xác thực ở đây
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Xóa cookie đăng nhập ở đây nếu bạn đang sử dụng cookie
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      if (document.cookie.includes("isLoggedIn=true")) {
        setIsLoggedIn(true);
      }
    };

    checkLoginStatus();

    const unloadHandler = () => {
      if (isLoggedIn) {
        document.cookie = "isLoggedIn=true; expires=0; path=/";
      }
    };

    window.addEventListener("beforeunload", unloadHandler);

    return () => {
      window.removeEventListener("beforeunload", unloadHandler);
    };
  }, [isLoggedIn]);

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
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const details = jwtDecode(credentialResponse.credential);
                console.log("Thông tin JWT:", details);
                console.log("Credential Response:", credentialResponse);
              }}
              onError={() => {
                console.log("Đăng nhập thất bại");
                // Xử lý lỗi đăng nhập ở đây
              }}
            />
          </GoogleOAuthProvider>
          <button
            type="button"
            className="btn btn-primary btncance"
            onClick={handleLogout}
          >
            Đăng xuất
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
