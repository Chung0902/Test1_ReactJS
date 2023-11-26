// ParentComponent2.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';
import ChildComponent2 from './ChildComponent2';

const ParentComponent2 = ({ count, increment }) => {
  return (
    <div className="parent-component">
      <h1 className="label">Giá trị: {count}</h1>
      <ChildComponent2 increment={increment} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ParentComponent2);
