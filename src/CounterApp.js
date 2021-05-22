import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
  // event in react
  // https://es.reactjs.org/docs/events.html

  // handleAdd
    const handleAdd = e => console.log(e);
  return(
    <>
      <h1>CounterApp</h1>
      <p>{value}</p>
      {/*<button onClick={ () => {console.log('+1')} }>+1</button>*/}
      {/*<button onClick={ (event) => {console.log(event)} }>+1</button>*/}
      {/*<button onClick={ event => handleAdd(event)}>+1</button>*/}
      <button onClick={ handleAdd }>+1</button>
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
