/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
