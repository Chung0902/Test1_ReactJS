import React, { useState, createContext, useEffect } from 'react';

// Tạo context để chia sẻ dữ liệu giữa các component
export const CalculateContext = createContext();

export const CalculateProvider = ({ children }) => {
  // Khai báo các state và hàm setter tương ứng
  const [num1, setNum1] = useState(0); // Số thứ nhất
  const [num2, setNum2] = useState(0); // Số thứ hai
  const [operation, setOperation] = useState('add'); // Phép toán (mặc định là cộng)
  const [result, setResult] = useState(null); // Kết quả của phép tính

  // Hàm tính toán kết quả dựa trên phép toán được chọn
  const calculateResult = () => {
    switch (operation) {
      case 'add': // Phép cộng
        setResult(num1 + num2);
        break;
      case 'subtract': // Phép trừ
        setResult(num1 - num2);
        break;
      case 'multiply': // Phép nhân
        setResult(num1 * num2);
        break;
      case 'divide': // Phép chia
        setResult(num2 !== 0 ? num1 / num2 : 'Error: Division by zero');
        break;
      default:
        setResult(null);
    }
  };

  // Hàm tính toán được gọi mỗi khi các state hoặc operation thay đổi
  const calculate = () => {
    calculateResult();
  };

  // Truyền các state, setter và hàm tính toán xuống các component con thông qua context
  return (
    <CalculateContext.Provider
      value={{
        num1,
        setNum1,
        num2,
        setNum2,
        operation,
        setOperation,
        result,
        setResult,
        calculate
      }}
    >
      {children}
    </CalculateContext.Provider>
  );
};
