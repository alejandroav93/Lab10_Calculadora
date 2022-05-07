/* eslint-disable react/prop-types */
import React from 'react';
import './Display.css';

function Display({ value }) {
  return (
    <p className="display" mode="single">
      {value}
    </p>
  );
}

export default Display;
