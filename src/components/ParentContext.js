// ParentContext.js
import React, { useContext } from 'react';
import MyContext from './MyContext';

const ParentContext = () => {
  const { count, incrementCount, decrementCount } = useContext(MyContext);

  return (
    <div className="parent">
      <p className="childcontext">Giá trị hiện tại: {count}</p>
      <button className='but_giam' onClick={decrementCount}>Giảm - </button>
      <button className="but_ch" onClick={incrementCount}>Tăng + </button>
    </div>
  );
};

export default ParentContext;
