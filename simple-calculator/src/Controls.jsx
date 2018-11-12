import React from 'react';
import './Controls.css';

export default function Controls() {
  return (
    <div className="grid-Controls">
      <button className="seven">7</button>
      <button className="eight">8</button>
      <button className="nine">9</button>
      <button className="subtraction">-</button>

      <button className="four">4</button>
      <button className="five">5</button>
      <button className="six">6</button>
      <button className="division">÷</button>

      <button className="one">1</button>
      <button className="two">2</button>
      <button className="three">3</button>
      <button className="multiplication">x</button>

      <button className="zero">0</button>
      <button className="decimalPoint">.</button>
      <button className="result">=</button>
      <button className="addition">+</button>
    </div>
  );
}
