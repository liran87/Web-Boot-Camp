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

const digitsKeyCode = [96, 97, 98, 99, 100, 101, 102, 103, 104, 105];

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
    this.calculatorDiv = React.createRef();
  }

  handleInputDigit = digit => {
    const { result, waitingForSecondOperand } = this.state;

    if (waitingForSecondOperand === true) {
      this.setState({ result: digit, waitingForSecondOperand: false });
    } else {
      let concatDigits = result === '0' ? digit : result + digit;
      this.setState({ result: concatDigits });
    }
  };

  handleOperator = nextOperator => {
    const { result, firstOperand, waitingForSecondOperand, operator, expression } = this.state;
    const inputValue = parseFloat(result);

    this.setState({
      expression: nextOperator === '=' ? '' : this.state.expression + this.state.result + ' ' + nextOperator + ' ',
    });

    if (operator && operator !== '=' && nextOperator !== '=' && waitingForSecondOperand) {
      let newExpression = expression.substring(0, expression.length - 2) + nextOperator + ' ';
      this.setState({ operator: nextOperator, expression: newExpression });
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

  handleInputDecimal = dot => {
    if (this.state.waitingForSecondOperand === true) {
      return;
    }

    if (!this.state.result.includes(dot)) {
      this.setState({ result: this.state.result + dot });
    }
  };

  handleClearAll = () => {
    this.setState({ result: '0', firstOperand: null, waitingForSecondOperand: null, operator: null, expression: '' });
  };

  handleClearEntry = () => {
    this.setState({ result: '0' });
  };

  clickHandler = event => {
    if (event.target.className.includes('operator')) {
      this.handleOperator(event.target.value);
      return;
    }

    if (event.target.className.includes('decimalPoint')) {
      this.handleInputDecimal(event.target.value);
      return;
    }

    if (event.target.className.includes('AC')) {
      this.handleClearAll();
      return;
    }

    if (event.target.className.includes('CE')) {
      this.handleClearEntry();
      return;
    }

    this.handleInputDigit(event.target.value);
  };

  componentDidMount() {
    this.calculatorDiv.current.focus();
  }

  keyDownHandler = event => {
    const key = event.key;
    const keyCode = event.keyCode;

    if (keyCode === 107 || keyCode === 109 || keyCode === 187) {
      this.handleOperator(key);
      return;
    }
    if (keyCode === 13) {
      this.handleOperator('=');
      return;
    }
    if (keyCode === 111) {
      this.handleOperator('÷');
      return;
    }
    if (keyCode === 106) {
      this.handleOperator('x');
      return;
    }
    if (keyCode === 110) {
      this.handleInputDecimal('.');
      return;
    }
    if (digitsKeyCode.includes(keyCode)) {
      this.handleInputDigit(key);
      return;
    }
    if (keyCode === 46 || keyCode === 8) {
      this.handleClearEntry();
      return;
    }
    if (keyCode === 27) {
      this.handleClearAll();
      return;
    }
  };

  render() {
    return (
      <div tabIndex="0" className="calculator" onKeyDown={this.keyDownHandler} ref={this.calculatorDiv}>
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
