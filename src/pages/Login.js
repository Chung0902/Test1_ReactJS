// import React from "react";
// import chibiImage from "../images/chibi2.png";
// import FormLogin from "../components/FormLogin";
// import LoginContextAPI from "../components/LoginContextAPI";
// import LayoutFrontend from "../components/layouts/LayoutFrontend";
// import LanguageSelector from "./../components/LanguageSelector";

// const Login = () => {
//   return (
//     <LayoutFrontend>
//       <div className="container1">
//         <div className="language-selector">
//           <LanguageSelector />
//         </div>

//         <div className="image">
//           <img src={chibiImage} alt="chibi" />
//         </div>
//         <div className="falther">
//           <div className="child_1">
//             <h1 className="the_h1">Đăng nhập</h1>
//             <p className="the_p">Đăng nhập tài khoản của bạn</p>
//             {/* Login Redux */}
//             <FormLogin />

//             {/* Login ContextAPI */}
//             {/* <LoginContextAPI /> */}
//           </div>
//           <div className="child_1 image_1 table1">
//             <img src={chibiImage} alt="chibi" />
//           </div>
//         </div>
//       </div>
//     </LayoutFrontend>
//   );
// };

// export default Login;
import React from "react";
import chibiImage from "../images/chibi2.png";
import FormLogin from "../components/FormLogin";
import LoginContextAPI from "../components/LoginContextAPI";
import LayoutFrontend from "../components/layouts/LayoutFrontend";
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  return (
    <LayoutFrontend>
      <div className="container1">
        <div className="language-selector">
          <LanguageSelector />
        </div>

        <div className="image">
          <img src={chibiImage} alt="chibi" />
        </div>
        <div className="falther">
          <div className="child_1">
            <h1 className="the_h1">{t("login_title")}</h1>
            <p className="the_p">{t("login_description")}</p>
            {/* Login Redux */}
            <FormLogin />

            {/* Login ContextAPI */}
            {/* <LoginContextAPI /> */}
          </div>
          <div className="child_1 image_1 table1">
            <img src={chibiImage} alt="chibi" />
          </div>
        </div>
      </div>
    </LayoutFrontend>
  );
};

export default Login;