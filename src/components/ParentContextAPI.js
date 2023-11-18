// ParentContext.js
import React, { useContext } from 'react';
import MyContext from './MyContext';
import LabelComponent from './LabelComponent'; 

const ParentContext = () => {
  const { count, incrementCount, decrementCount } = useContext(MyContext);

  return (
    <div className="parent">
      {/* Truyền giá trị count xuống component con */}
      <LabelComponent count={count} />
      <button className='bt_giam' onClick={decrementCount}>Giảm - </button>
      <button className="but_ch" onClick={incrementCount}>Tăng + </button>
    </div>
  );
};

export default ParentContext;
