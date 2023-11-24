// ParentComponent1.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';
import ChildComponent1 from './ChildComponent1';

const ParentComponent1 = ({ count, increment, decrement }) => {
  return (
    <div className="parent-component">
      <h1 className="label">Giá trị: {count}</h1>
      <ChildComponent1 increment={increment} decrement={decrement} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(ParentComponent1);
