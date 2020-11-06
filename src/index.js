import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './Calc.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Calc />
      </div>
    );
  }
}
//Рендерит React-элемент в DOM-элемент,
//переданный в аргумент container
//и возвращает ссылку на компонент
//(или возвращает null для компонентов без состояния).

//Если React-элемент уже был ранее отрендерен в container,
//то повторный вызов произведёт его обновление
//и изменит соответствующую часть DOM,
//чтобы она содержала последние изменения.
ReactDOM.render(<App />, document.getElementById('root'));
