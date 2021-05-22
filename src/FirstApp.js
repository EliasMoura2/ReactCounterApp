import React from 'react';
// const FirstApp = (props) => {
  // lo comun es usar destructuring en los parametros
  // console.log(props) // {greet: 'Hello World'} -> return object
  const FirstApp = ({ greet = 'Hello world' }) => {
    console.log(greet) // Hello world -> return greet content
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

export default FirstApp;