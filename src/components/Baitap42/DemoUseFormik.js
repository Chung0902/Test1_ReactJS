import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Định nghĩa schema validation sử dụng Yup
const validationSchema = Yup.object().shape({
  studentName: Yup.string()
    .required('Không thể để trống')
    .min(5, 'Không thể ngắn hơn 5 ký tự')
    .matches(/^[a-zA-ZÀ-Ỹà-ỹ\s]+$/, 'Chỉ có thể chứa các chữ cái abc...z'),
});

// Giá trị khởi tạo cho form
const initialValues = {
  studentName: '',
};

const DemoUseFormik = () => {
  // Sử dụng useFormik hook để quản lý trạng thái và xử lý sự kiện của form
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Gửi dữ liệu vào cơ sở dữ liệu hoặc thực hiện các hành động khác tại đây
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Thêm sinh viên</h1>
      {/* Sử dụng thẻ form và kết hợp với onSubmit của formik */}
      <form onSubmit={formik.handleSubmit}>
        <div>
          {/* Nhãn và input cho trường studentName */}
          <label htmlFor="studentName">Tên sinh viên:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            // Xử lý sự kiện thay đổi giá trị và mất focus của input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // Giá trị của input là giá trị từ trạng thái quản lý bởi formik
            value={formik.values.studentName}
          />
          {/* Hiển thị thông báo lỗi nếu có */}
          {formik.touched.studentName && formik.errors.studentName && (
            <div className="error">{formik.errors.studentName}</div>
          )}
        </div>
        {/* Nút submit */}
        <button type="submit" disabled={!formik.isValid || !formik.dirty}>
          Thêm sinh viên
        </button>
      </form>
    </div>
  );
};

export default DemoUseFormik;
