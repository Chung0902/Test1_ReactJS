import React from "react";
import GrandChild from "./GrandChild";

function Child2({ value }) {
  return (
    <div className="child">
      <GrandChild value={value} />
    </div>
  );
}

export default Child2;
