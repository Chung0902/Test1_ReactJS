import React, { useState } from "react";
import Child2 from "./Child2";

function Parent2() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <div className="parent">
      <button className="but_ch" onClick={handleIncrement}>Tăng +</button>
      <Child2 value={value} />
    </div>
  );
}

export default Parent2;
