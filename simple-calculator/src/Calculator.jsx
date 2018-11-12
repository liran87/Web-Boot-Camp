import React, { Component } from 'react';
import './Calculator.css';
import Controls from './Controls';
import Screen from './Screen';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { expression: '', result: 0 };
  }

  expressionChangedHandler = event => {
    let expression = this.state.expression;
    let char = event.target.value;
    let newExpression = expression + char;

    this.setState({ expression: newExpression });
  };

  render() {
    return (
      <div className="calculator">
        <div className="calc-screen">
          <Screen expression={this.state.expression} result={this.state.result} />
        </div>
        <div className="calc-controls">
          <Controls click={this.expressionChangedHandler} />
        </div>
      </div>
    );
  }
}
