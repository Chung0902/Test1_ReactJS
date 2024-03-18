import { useState, useEffect } from "react";

const useCalculate = () => {
  const [num1, setNum1] = useState(0); // State lưu trữ giá trị num1
  const [num2, setNum2] = useState(0); // State lưu trữ giá trị num2
  const [operation, setOperation] = useState("+"); // State lưu trữ phép toán
  const [result, setResult] = useState(0); // State lưu trữ kết quả

  // useEffect để tính toán kết quả khi có sự thay đổi trong num1, num2 hoặc operation
  useEffect(() => {
    switch (operation) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2); 
        break;
      case "/":
        setResult(num1 / num2); 
        break;
      default:
        setResult(0);
        break;
    }
  }, [num1, num2, operation]); // useEffect sẽ chạy lại khi có sự thay đổi trong num1, num2 hoặc operation

  // Trả về các giá trị và hàm cần thiết để sử dụng trong component
  return { num1, num2, operation, result, setNum1, setNum2, setOperation };
};

export default useCalculate;
