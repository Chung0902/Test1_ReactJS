import React from "react";

function GrandChild({ value }) {
  return (
    <div className="grandchild">
      <label>Giá trị: {value}</label>
    </div>
  );
}

export default GrandChild;
