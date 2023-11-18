// LabelComponent.js
import React from 'react';

const LabelComponent = ({ count }) => {
  return (
    <label className="childcontext">Giá trị: {count}</label>
  );
};

export default LabelComponent;
