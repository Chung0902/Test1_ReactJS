import React, { useState } from "react";
import Child1 from "./Child1";


function ParentComponent() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="parent">
      <label>Giá trị: {value}</label>
      <Child1 onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
}

export default ParentComponent;
