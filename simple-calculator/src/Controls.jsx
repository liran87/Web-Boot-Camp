import React from 'react';
import './Controls.css';

export default function Controls(props) {
  return (
    <div className="grid-controls">
      <button className="control seven" onClick={props.click} value="7">
        7
      </button>
      <button className="control eight" onClick={props.click} value="8">
        8
      </button>
      <button className="control nine" onClick={props.click} value="9">
        9
      </button>
      <button className="control subtraction" onClick={props.click} value="-">
        -
      </button>

      <button className="control four" onClick={props.click} value="4">
        4
      </button>
      <button className="control five" onClick={props.click} value="5">
        5
      </button>
      <button className="control six" onClick={props.click} value="6">
        6
      </button>
      <button className="control division" onClick={props.click} value="÷">
        ÷
      </button>

      <button className="control one" onClick={props.click} value="1">
        1
      </button>
      <button className="control two" onClick={props.click} value="2">
        2
      </button>
      <button className="control three" onClick={props.click} value="3">
        3
      </button>
      <button className="control multiplication" onClick={props.click} value="x">
        x
      </button>

      <button className="control zero" onClick={props.click} value="0">
        0
      </button>
      <button className="control decimalPoint" onClick={props.click} value=".">
        .
      </button>
      <button className="control result" onClick={props.click} value="=">
        =
      </button>
      <button className="control addition" onClick={props.click} value="+">
        +
      </button>
    </div>
  );
}
