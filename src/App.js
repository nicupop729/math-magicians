/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((previousState) => calculate(previousState, e.target.innerText));
  }

  render() {
    const { total, next } = this.state;
    const calcStates = { total, next };
    return (
      <div className="App">
        <Calculator handleClick={this.handleClick} calcStates={calcStates} />
      </div>
    );
  }
}

export default App;
