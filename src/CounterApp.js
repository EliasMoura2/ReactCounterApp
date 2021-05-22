import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value)

  // handleAdd
    const handleAdd = () => { setCounter( counter + 1 )}
  // handleReset
    const handleReset = () => { setCounter ( value )}
  // handleSubstract
    const handleSubs = () => { setCounter( counter - 1 )}

  return(
    <div id="counter">
      <h1>Counter App</h1>
      <p>{ counter }</p>
      <div>
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleReset }> Reset </button>
        <button onClick={ handleSubs }> -1 </button>
      </div>
    </div>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number
}

CounterApp.defaultProps = {
  value: 1
}

export default CounterApp;
