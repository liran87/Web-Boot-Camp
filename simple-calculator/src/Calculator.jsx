import React, { Component } from 'react';
import './Calculator.css';
import Controls from './Controls';

export default class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <div className="calc-screen">0</div>
        <div className="calc-controls">
          <Controls />
        </div>
      </div>
    );
  }
}
