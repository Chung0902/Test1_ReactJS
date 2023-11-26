// ChildComponent2.js
import React from "react";

const ChildComponent2 = ({ increment }) => {
  return (
    <div className="child-component">
      <button className="button3" onClick={increment}>
        Tăng +
      </button>
    </div>
  );
};

export default ChildComponent2;
