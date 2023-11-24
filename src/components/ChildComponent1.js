// ChildComponent1.js
import React from "react";

const ChildComponent1 = ({ increment, decrement }) => {
  return (
    <div className="child-component">
      <button className="button1" onClick={increment}>
        Tăng +
      </button>
      <button className="button2" onClick={decrement}>
        Giảm -
      </button>
    </div>
  );
};

export default ChildComponent1;
