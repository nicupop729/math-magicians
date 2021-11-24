/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './calculator.css';
import '../logic/calculate';
import '../logic/operate';

class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <p className="grid-item display">0</p>
        <button type="button" className="grid-item AC">
          AC
        </button>
        <button type="button" className="grid-item operations">
          +/-
        </button>
        <button type="button" className="grid-item procentage">
          %
        </button>
        <button type="button" className="grid-item divide operation">
          ÷
        </button>
        <button type="button" className="grid-item seven">
          7
        </button>
        <button type="button" className="grid-item eight">
          8
        </button>
        <button type="button" className="grid-item nine">
          9
        </button>
        <button type="button" className="grid-item multiply operation">
          ×
        </button>
        <button type="button" className="grid-item four">
          4
        </button>
        <button type="button" className="grid-item five">
          5
        </button>
        <button type="button" className="grid-item six">
          6
        </button>
        <button type="button" className="grid-item minus operation">
          -
        </button>
        <button type="button" className="grid-item one">
          1
        </button>
        <button type="button" className="grid-item two">
          2
        </button>
        <button type="button" className="grid-item three">
          3
        </button>
        <button type="button" className="grid-item plus operation">
          +
        </button>
        <button type="button" className="grid-item zero">
          0
        </button>
        <button type="button" className="grid-item period">
          .
        </button>
        <button type="button" className="grid-item equal operation">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
