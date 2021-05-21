import React from 'react';
import ReactDOM from 'react-dom';

const greet = <h1>Hello World</h1>;

// console.log(greet);
const divRoot = document.querySelector('#root');

// console.log(divRoot);

ReactDOM.render(greet, divRoot);