// MyProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
      setCount(count - 1);
  };

  return (
    <MyContext.Provider value={{ count, incrementCount, decrementCount }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
