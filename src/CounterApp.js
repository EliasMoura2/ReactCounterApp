import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

  return(
    <>
      <h1>CounterApp</h1>
      <p>{value}</p>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number
}

CounterApp.defaultProps = {
  value: 1
}

export default CounterApp;
