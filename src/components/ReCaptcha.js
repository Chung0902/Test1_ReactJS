// import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

// const ReCaptcha = ({ handleRecaptchaChange }) => {
//   const [recaptchaValue, setRecaptchaValue] = useState(null);
//   const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false);

//   const onRecaptchaChange = (value) => {
//     setRecaptchaValue(value);
//     handleRecaptchaChange(value);
//     setIsRecaptchaChecked(!!value);
//   };

//   return (
//     <div className="captcha captcha2">
//       <ReCAPTCHA
//         sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
//         onChange={onRecaptchaChange}
//         hl="vi" // Thêm thuộc tính này để đặt ngôn ngữ thành tiếng Việt
//       />
//     </div>
//   );
// };

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";

const ReCaptcha = ({ handleRecaptchaChange }) => {
  const { t } = useTranslation();

  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false);

  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    handleRecaptchaChange(value);
    setIsRecaptchaChecked(!!value);
  };

  return (
    <div className="captcha captcha2">
      <ReCAPTCHA
        key={t("recaptcha_language")} //Thêm khóa vào để thay đổi đa ngôn ngữ 
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onRecaptchaChange}
        hl={t("recaptcha_language")}
      />
    </div>
  );
};

export default ReCaptcha;
