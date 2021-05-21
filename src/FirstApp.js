import React from 'react';
const FirstApp = () => {
  const greet = 'Hello World'
  const num = 123
  const array = ['Argentina', 'Brasil']
  const user = {
    firstname: "Elias",
    age: 28
  }

  return (
    < >
      <h1>{greet}</h1>
      <p>number: {num}</p>
      <p>array: {array}</p>
      <p>object: {JSON.stringify(user)}</p>
      <pre>object: {JSON.stringify(user, null, 3)}</pre>
      //coments in jsx
      {/*<pre>object: {JSON.stringify(user, null, 3)}</pre>*/}
      <p>My First Page</p>
    </ >
  )
}

export default FirstApp;