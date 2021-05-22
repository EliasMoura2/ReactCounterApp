import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp';
import './index.css';

// console.log(greet);
const divRoot = document.querySelector('#root');

// console.log(divRoot);

// ReactDOM.render( <FirstApp greet={123}/>, divRoot);
// Warning: Failed prop type: Invalid prop `greet` of type `number` supplied to `FirstApp`, expected `string`.

ReactDOM.render(<FirstApp greet='Hello World, my name is Goku' />, divRoot);