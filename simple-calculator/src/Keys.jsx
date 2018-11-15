import React from 'react';
import './Keys.css';

export default function Keys(props) {
  return (
    <div className="grid-keys">
      <button className="key AC" onClick={props.click} value="AC">
        AC
      </button>
      <button className="key CE" onClick={props.click} value="CE">
        CE
      </button>

      <button className="key seven" onClick={props.click} value="7">
        7
      </button>
      <button className="key eight" onClick={props.click} value="8">
        8
      </button>
      <button className="key nine" onClick={props.click} value="9">
        9
      </button>
      <button className="key operator subtraction" onClick={props.click} value="-">
        -
      </button>

      <button className="key four" onClick={props.click} value="4">
        4
      </button>
      <button className="key five" onClick={props.click} value="5">
        5
      </button>
      <button className="key six" onClick={props.click} value="6">
        6
      </button>
      <button className="key operator division" onClick={props.click} value="÷">
        ÷
      </button>

      <button className="key one" onClick={props.click} value="1">
        1
      </button>
      <button className="key two" onClick={props.click} value="2">
        2
      </button>
      <button className="key three" onClick={props.click} value="3">
        3
      </button>
      <button className="key operator multiplication" onClick={props.click} value="x">
        x
      </button>

      <button className="key zero" onClick={props.click} value="0">
        0
      </button>
      <button className="key decimalPoint" onClick={props.click} value=".">
        .
      </button>
      <button className="key operator result" onClick={props.click} value="=">
        =
      </button>
      <button className="key operator addition" onClick={props.click} value="+">
        +
      </button>
    </div>
  );
}
