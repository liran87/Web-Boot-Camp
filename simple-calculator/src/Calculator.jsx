import React, { Component } from 'react';
import './Calculator.css';
import Keys from './Keys';
import Screen from './Screen';

const performCalculation = {
  '÷': (firstOperand, secondOperand) => firstOperand / secondOperand,

  x: (firstOperand, secondOperand) => firstOperand * secondOperand,

  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

  '=': (firstOperand, secondOperand) => secondOperand,
};

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { result: '0', firstOperand: null, waitingForSecondOperand: false, operator: null };
  }

  handleOperator = nextOperator => {
    const { firstOperand, waitingForSecondOperand, result, operator } = this.state;
    const inputValue = parseFloat(result);

    if (operator && waitingForSecondOperand) {
      this.setState({ operator: nextOperator });
      return;
    }

    if (firstOperand == null) {
      this.setState({ firstOperand: inputValue });
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const value = performCalculation[operator](currentValue, inputValue);

      this.setState({ result: String(value) });
      this.setState({ firstOperand: value });
    }

    this.setState({ waitingForSecondOperand: true });
    this.setState({ operator: nextOperator });
  };

  inputDecimal = dot => {
    if (this.state.waitingForSecondOperand === true) {
      return;
    }

    if (!this.state.result.includes(dot)) {
      this.setState({ result: this.state.result + dot });
    }
  };

  inputDigit = digit => {
    const { result, waitingForSecondOperand } = this.state;

    if (waitingForSecondOperand === true) {
      this.setState({ result: digit });
      this.setState({ waitingForSecondOperand: false });
    } else {
      this.setState({ result: result === '0' ? digit : result + digit });
    }
  };

  clearAll = () => {
    this.setState({ result: '0', firstOperand: null, waitingForSecondOperand: null, operator: null });
  };

  clickHandler = event => {
    if (event.target.className.includes('operator')) {
      this.handleOperator(event.target.value);
      return;
    }

    if (event.target.className.includes('decimalPoint')) {
      this.inputDecimal(event.target.value);
      return;
    }

    if (event.target.className.includes('AC')) {
      this.clearAll();
      return;
    }

    this.inputDigit(event.target.value);
    // let expression = this.state.expression;
    // let value = event.target.value;
    // let newExpression = expression + value;

    // let result = newExpression;
    // this.setState({ expression: newExpression, result: result });
  };

  render() {
    return (
      <div className="calculator">
        <div className="calc-screen">
          <Screen expression={this.state.expression} result={this.state.result} />
        </div>
        <div className="calc-keys">
          <Keys click={this.clickHandler} />
        </div>
      </div>
    );
  }
}
