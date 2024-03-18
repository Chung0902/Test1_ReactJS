import React from 'react';
import useCalculate from '../../Hooks/useCalculate'; 
import './CalculatorComponent.css'; 

const CalculatorComponent = () => {
  // Sử dụng hook useCalculate để lấy các giá trị và hàm cần thiết
  const { num1, num2, operation, result, setNum1, setNum2, setOperation } = useCalculate();

  // Hàm tính toán, sẽ được gọi khi nhấn vào nút Calculate
  const calculate = () => {
    // Thực hiện phép tính tương ứng với phép toán được chọn
    switch (operation) {
      case '+':
      case '-':
      case '*':
      case '/':
        break;
      default:
        break;
    }
  };

  return (
   
    <div className="calculator-container">
      <div className="input-container">
       
        <input className="num-input" type="number" value={num1} onChange={(e) => setNum1(parseFloat(e.target.value))} />
  
        <select className="operation-select" value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      
        <input className="num-input" type="number" value={num2} onChange={(e) => setNum2(parseFloat(e.target.value))} />
      </div>
      <button className="calculate-button" onClick={calculate}>Calculate</button>
     
      <div className="result">Result: {result}</div>
    </div>
  );
};

export default CalculatorComponent;
