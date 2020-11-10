import React from 'react';
import './Button.css';

const isOperator = val => {
  //is a number (not[not_is_a_number]) or . or =
  return !isNaN(val) || val === "." || val === "=";
}

//вернём jsx
const Button = props =>
//es-6 интерполяция строк ``
  <div className={`button-wrapper ${
      //текст на кнопке
      //if-else, но короче
      isOperator(props.children) ? null : "operator"
    }`}>
    {props.children}
  </div>;

export default Button;
