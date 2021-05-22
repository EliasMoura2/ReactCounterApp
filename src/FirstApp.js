import React from 'react';
import PropTypes from 'prop-types';

  const FirstApp = ({ greet }) => {
    // tenemos que tener en cuenta que puede ser que en el componente padre
    // no se envie ninguna prop, por lo que podemospodemos tomar varias posturas
      // 1 - establecer un valor por defecto
      // 2 - obligar a que se envie un valor
  return (
    < >
      {/*<h1>{props.greet}</h1>*/}
      <h1>{greet}</h1>
      <p>My First Page</p>
    </ >
  )
}


FirstApp.propTypes = {
  greet: PropTypes.string.isRequired
    
}


export default FirstApp;