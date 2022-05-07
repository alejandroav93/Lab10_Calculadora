/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import './Buttons.css';

function Buttons({ className, value, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

export default Buttons;
