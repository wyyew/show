import React from 'react';
import PropTypes from 'prop-types';

function Counter ({ counter, increment, decrement, incrementIfOdd, incrementAsync }) {
  return (
    <p>
      Clicked: {counter} times
      {' '}
      <button onClick={increment}>+</button>
      {' '}
      <button onClick={decrement}>-</button>
      {' '}
      <button onClick={incrementIfOdd}>Increment if odd</button>
      {' '}
      <button onClick={() => incrementAsync()}>increment async</button>
    </p>
  )
}

Counter.propTypes = {
  counter:PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement:PropTypes.func.isRequired
};

export default Counter;
