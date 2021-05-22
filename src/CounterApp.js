import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
  // const state = useState('Goku');
  // console.log( state );
  // console.log( state[1]() ); // en el indice 1 esta la funcion

  // const [nombre, setNombre] = useState('Goku');
  // console.log(nombre, setNombre);

  const [counter, setCounter] = useState(value) 
  // handleAdd
    // const handleAdd = e => console.log(e);
    const handleAdd = () => { setCounter( counter + 1)}
    // otra forma de escribir la funcion
    // const handleAdd = () => { setCounter( c => c + 1)}

  return(
    <>
      <h1>CounterApp</h1>
      <p>{ counter }</p>
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
