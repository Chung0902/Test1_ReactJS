import React from 'react';
import useCalculate from '../../Hooks/useCalculate'; // Import hook useCalculate
import './CalculatorComponent.css';

const CalculatorComponent = () => {
  // Sử dụng hook useCalculate để lấy các giá trị và hàm từ CalculateContext
  const {
    num1,          // Giá trị của số thứ nhất
    setNum1,       // Hàm setter cho số thứ nhất
    num2,          // Giá trị của số thứ hai
    setNum2,       // Hàm setter cho số thứ hai
    operation,     // Phép toán được chọn
    setOperation,  // Hàm setter cho phép toán
    result,        // Kết quả của phép tính
    calculate      // Hàm tính toán
  } = useCalculate();

  return (
    <div className="calculator-container">
      <div className="input-container">
        <input className="num-input" type="number" value={num1} onChange={(e) => setNum1(parseFloat(e.target.value))} />
        <select className="operation-select" value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        <input className="num-input" type="number" value={num2} onChange={(e) => setNum2(parseFloat(e.target.value))} />
      </div>
      <button className="calculate-button" onClick={calculate}>Calculate</button>
      <div className="result">Result: {result}</div>
    </div>
  );
};

export default CalculatorComponent;
