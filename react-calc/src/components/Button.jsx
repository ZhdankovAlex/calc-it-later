import React from 'react';
import './Button.css';

const isOperator = val => {
  //is a number (not[not_is_a_number]) or . or =
  //doesn't work for . or =
  //и не понимаю, почему так [ TO DO ]
  return !isNaN(val) || val === "." || val === "=";
}

//вернём jsx
export const Button = props =>
//es-6 интерполяция строк ``
  <div className={`button-wrapper ${
      //текст на кнопке
      //if-else, но короче
      isOperator(props.children) ? null : "operator"
    }`}>
    {props.children}
  </div>;
