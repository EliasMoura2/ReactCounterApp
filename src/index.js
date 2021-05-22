import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp';
import './index.css';

// console.log(greet);
const divRoot = document.querySelector('#root');

// console.log(divRoot);

// ReactDOM.render( <FirstApp greet='Hello world, my name is Goku'/>, divRoot);
ReactDOM.render( <FirstApp />, divRoot);