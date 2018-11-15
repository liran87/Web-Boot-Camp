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
    this.state = {
      result: '0',
      firstOperand: null,
      waitingForSecondOperand: false,
      operator: null,
      expression: '',
    };
  }

  inputDigit = digit => {
    const { result, waitingForSecondOperand } = this.state;

    if (waitingForSecondOperand === true) {
      this.setState({ result: digit, waitingForSecondOperand: false });
    } else {
      let concatDigits = result === '0' ? digit : result + digit;
      this.setState({ result: concatDigits });
    }
  };

  handleOperator = nextOperator => {
    const { result, firstOperand, waitingForSecondOperand, operator } = this.state;
    const inputValue = parseFloat(result);

    this.setState({
      expression: nextOperator === '=' ? '' : this.state.expression + this.state.result + nextOperator,
    });

    if (operator && operator !== '=' && nextOperator !== '=' && waitingForSecondOperand) {
      this.setState({ operator: nextOperator, expression: this.state.expression.replace(/.$/, nextOperator) });
      return;
    }

    if (firstOperand == null) {
      this.setState({ firstOperand: inputValue });
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const value = performCalculation[operator](currentValue, inputValue);

      this.setState({
        result: String(value),
        firstOperand: value,
      });
    }

    this.setState({
      waitingForSecondOperand: true,
      operator: nextOperator,
    });
  };

  inputDecimal = dot => {
    if (this.state.waitingForSecondOperand === true) {
      return;
    }

    if (!this.state.result.includes(dot)) {
      this.setState({ result: this.state.result + dot });
    }
  };

  clearAll = () => {
    this.setState({ result: '0', firstOperand: null, waitingForSecondOperand: null, operator: null, expression: '' });
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
