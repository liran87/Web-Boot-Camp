import React from 'react';
import './Screen.css';

export default function Screen(props) {
  return (
    <div className="grid-screen">
      <div className="expression">{props.expression}</div>
      <div className="result">{props.result}</div>
    </div>
  );
}
