import React from "react";

function ChildComponent({ value }) {
  return (
    <div className="child">
      <label>Giá trị: {value}</label>
    </div>
  );
}

export default ChildComponent;
