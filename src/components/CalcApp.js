/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import Body from './Body';
import Display from './Display';
import ButtonArray from './ButtonArray';
import Buttons from './Buttons';

const toStringFunction = (num) => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

const spaceRemoval = (num) => num.toString().replace(/\s/g, '');

const buttonValues = [
  ['C', '+/-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

function CalcApp() {
  const [calc, setValue] = useState({
    signo: '',
    num: 0,
    result: 0,
  });

  const numero = (parameter) => {
    parameter.preventDefault();
    const value = parameter.target.innerHTML;

    if (spaceRemoval(calc.num).length < 9) {
      setValue({
        ...calc,
        num:
          calc.num === 0 && value === '0'
            ? '0'
            : spaceRemoval(calc.num) % 1 === 0
              ? toStringFunction(Number(spaceRemoval(calc.num + value)))
              : toStringFunction(calc.num + value),
        result: !calc.signo ? 0 : calc.result,
      });
    }
  };

  const coma = (parameter) => {
    parameter.preventDefault();
    const value = parameter.target.innerHTML;

    setValue({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
    });
  };

  const signoo = (parameter) => {
    setValue({
      ...calc,
      signo: parameter.target.innerHTML,
      result: !calc.result && calc.num ? calc.num : calc.result,
      num: 0,
    });
  };

  const igualdad = () => {
    if (calc.signo && calc.num) {
      const math = (a, b, signo) => (signo === '+' ? a + b
        : signo === '-' ? a - b
          : signo === 'X' ? a * b
            : a / b);

      setValue({
        ...calc,
        result:
          calc.num === '0' && calc.signo === '/'
            ? 'No puede dividir por cero (0)'
            : toStringFunction(
              math(
                Number(spaceRemoval(calc.result)),
                Number(spaceRemoval(calc.num)),
                calc.signo,
              ),
            ),
        signo: '',
        num: 0,
      });
    }
  };

  const cambioSigno = () => {
    setValue({
      ...calc,
      num: calc.num ? toStringFunction(spaceRemoval(calc.num) * -1) : 0,
      result: calc.result ? toStringFunction(spaceRemoval(calc.result) * -1) : 0,
      signo: '',
    });
  };

  const porcentaje = () => {
    let num = calc.num ? parseFloat(spaceRemoval(calc.num)) : 0;
    let result = calc.result ? parseFloat(spaceRemoval(calc.result)) : 0;
    setValue({
      ...calc,
      num: (num /= 100 ** 1),
      result: (result /= 100 ** 1),
      signo: '',
    });
  };

  const reset = () => {
    setValue({
      ...calc,
      signo: '',
      num: 0,
      result: 0,
    });
  };

  return (
    <Body>
      <Display value={calc.num ? calc.num : calc.result} />
      <ButtonArray>
        {buttonValues.flat().map((btn, i) => (
          <Buttons
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className={btn === '=' ? 'equals' : btn === '+' ? 'sum' : btn === '-' ? 'less' : btn === 'X' ? 'multi' : btn === '/' ? 'divide' : btn === 'C' ? 'reset' : btn === '+/-' ? 'signoo' : btn === '%' ? 'porcentaje' : ''}
            value={btn}
            onClick={
                btn === 'C'
                  ? reset
                  : btn === '+/-'
                    ? cambioSigno
                    : btn === '%'
                      ? porcentaje
                      : btn === '='
                        ? igualdad
                        : btn === '/' || btn === 'X' || btn === '-' || btn === '+'
                          ? signoo
                          : btn === '.'
                            ? coma
                            : numero
              }
          />
        ))}
      </ButtonArray>
    </Body>
  );
}

export default CalcApp;
