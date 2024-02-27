import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    studentName: Yup.string()
      .required('Không thể để trống')
      .min(5, 'Không thể ngắn hơn 5 ký tự')
      .matches(/^[a-zA-ZÀ-Ỹà-ỹ\s]+$/, 'Chỉ có thể chứa các chữ cái abc...z'),
  });

const initialValues = {
  studentName: '',
};

const StudentForm = () => {
  const handleSubmit = (values) => {
    // Gửi dữ liệu vào cơ sở dữ liệu hoặc thực hiện các hành động khác tại đây
    console.log(values);
  };

  return (
    <div>
      <h1>Thêm sinh viên</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form>
            <div>
              <label htmlFor="studentName">Tên sinh viên:</label>
              <Field type="text" id="studentName" name="studentName" />
              <ErrorMessage name="studentName" component="div" className="error" />
            </div>
            <button type="submit" disabled={!isValid || !dirty}>
              Thêm sinh viên
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StudentForm;
