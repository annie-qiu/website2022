/* eslint-disable react/function-component-definition */
import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

const Controls = (props) => {
  return (
    <div>
      <button type="button" onClick={props.increment}>+</button>
      <button type="button" onClick={props.decrement}>-</button>
    </div>
  );
};

// note how here we leave the first argument null, we don't need to connect any state just actions
export default connect(null, { increment, decrement })(Controls);