import React from 'react';
// import React, { Fragment } from 'react';
// Statefull Class Component (SCC) -> Class Component(CC)
// Stateless Functional Component (SFC) -> Functional Component(FC)

const FirstApp = () => {
// javascript solo puede retornar un objeto a la vez
// creamos un div solo para contener h1 y p
  // return (
  //   <div>
  //     <h1>Hello World</h1>
  //     <p>My First Page</p>
  //   </div>
  // );
  
  // podemos usar un Fragment (Higher order component)
  // componente que recibe otros componentes hijos
  // return(
  //   <Fragment>
  //     <h1>Hello World</h1>
  //     <p>My First Page</p>
  //   </Fragment>
  // )

  // podemos usar la forma corta para usar fragments
  return (
    < >
      <h1>Hello World</h1>
      <p>My First Page</p>
    </ >
  )
}

export default FirstApp;