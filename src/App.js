import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoBtn } from './TodoBtn';

let defaultTodos = [
  {text: 'To laught till cry', completed: true},
  {text: 'To sing till to be hoarse', completed: false},
  {text: 'To pray till to be calm', completed: true},
  {text: 'To sleep till to be ready', completed: false},
];

function App() {
  return (
    <>
      <TodoCounter total={20} completed={15}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo=> (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <TodoBtn/>
    </>
  );
}

export default App;
