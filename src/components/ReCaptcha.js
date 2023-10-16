import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ({ handleRecaptchaChange }) => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false);

  const onRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    handleRecaptchaChange(value);
    setIsRecaptchaChecked(!!value);
  };


  return (
    <div className="captcha">
      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onRecaptchaChange}
        hl="vi" // Thêm thuộc tính này để đặt ngôn ngữ thành tiếng Việt
      />
    </div>
  );
};

export default ReCaptcha;
