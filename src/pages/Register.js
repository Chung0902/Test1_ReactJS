import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Radio from "../components/Radio";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReCaptcha from "../components/ReCaptcha";
import { registerUser } from '../actions/authActions';
import { useDispatch } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();
  const [idCounter, setIdCounter] = useState(1);
  const [isRecaptchaVerified, setRecaptchaVerified] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      email: '',
      address: '',
      password: '',
      gender: 'Nam',
      googleVerified: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Không được ít hơn 5 ký tự')
        .max(25, 'Không được nhiều hơn 25 ký tự')
        .required('Vui lòng nhập họ và tên'),
      age: Yup.number()
        .required('Vui lòng nhập tuổi')
        .positive('Tuổi phải là số dương')
        .integer('Tuổi phải là số nguyên'),
      email: Yup.string()
        .email('Email không đúng định dạng')
        .required('Vui lòng nhập email'),
      address: Yup.string()
        .min(5, 'Không được ít hơn 5 ký tự')
        .max(20, 'Không được nhiều hơn 20 ký tự')
        .required('Vui lòng nhập địa chỉ'),
      password: Yup.string()
        .min(5, 'Không được ít hơn 5 ký tự')
        .required('Vui lòng nhập mật khẩu'),
    }),
    onSubmit: (values, { resetForm }) => {
      // Lấy danh sách người dùng từ local storage
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Tăng idCounter và sử dụng nó làm id cho người dùng mới
      const newUser = { id: idCounter, ...values };
      setIdCounter(idCounter + 1);

      // Thêm người dùng mới vào danh sách
      users.push(newUser);

      // Lưu danh sách người dùng mới vào local storage
      localStorage.setItem('users', JSON.stringify(users));

      // Gửi action để cập nhật trạng thái Redux
      dispatch(registerUser(users, newUser));

      // Cập nhật các giá trị khác
      resetForm();
      formik.setFieldValue('gender', 'Nam');
      formik.setFieldValue('googleVerified', true);
      setRecaptchaVerified(false);

      console.log(values);
    },
  });

  const handleGenderChange = (selectedGender) => {
    formik.setFieldValue('gender', selectedGender);
  };

  return (
    <div className="container2">
      <form onSubmit={formik.handleSubmit} className="father2">
        <h1>Đăng ký</h1>
        <label>
          Họ và tên:
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="input1"
          />
          {formik.errors.name && formik.touched.name && (
            <p>{formik.errors.name}</p>
          )}
        </label>
        <br />
        <label>
          Tuổi:
          <input
            type="number"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="age input1"
          />
          {formik.errors.age && formik.touched.age && (
            <p>{formik.errors.age}</p>
          )}
        </label>
        <br />
        <Radio handleGenderChange={handleGenderChange} />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="email input1"
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </label>
        <br />
        <label>
          Địa chỉ:
          <input
            type="text"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="address input1"
          />
          {formik.errors.address && formik.touched.address && (
            <p>{formik.errors.address}</p>
          )}
        </label>
        <br />
        <label>
          Mật khẩu:
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="password input1"
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </label>
        <br />
        <ReCaptcha />
        <br />
        <button
          type="submit"
          className="btn btn-primary dangky"
          value="Submit Form"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Register;
