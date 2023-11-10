import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="parent">
      <div className="button_p">
        <button onClick={decrement}>Giảm - </button>
        <button onClick={increment}>Tăng + </button>
      </div>
      <ChildComponent value={value} />
    </div>
  );
}

export default ParentComponent;
