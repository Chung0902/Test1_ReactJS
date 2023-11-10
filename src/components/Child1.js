import React from "react";

function Child1({ onIncrement, onDecrement }) {
  return (
    <div className="child but_ch">
      <button onClick={onIncrement}>Tăng + </button>
      <button onClick={onDecrement}>Giảm - </button>
    </div>
  );
}

export default Child1;
