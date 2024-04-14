//import { TodoCounter } from './TodoCounter';
import React from 'react';
import {Container} from './Container'
import {Date} from './Date'
import { TodoSearch } from './TodoSearch';
import { BackgroundFrame } from './BackgroundFrame';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoItemDetail } from './TodoItemDetail';
import { TodoBtn } from './TodoBtn';
import {NewTodoItemMenu} from './NewTodoItemMenu'

let defaultTodos = [
  {text: 'To laught till cry', completed: true},
  {text: 'To sing till to be hoarse', completed: false},
  {text: 'To pray till to be calm', completed: true},
  {text: 'To sleep till to be ready', completed: false},
];

function App() {
  return (
    <>
      <Container>
        <Date/>
        <TodoSearch/>

        <BackgroundFrame/>

        <TodoList>
          {defaultTodos.map(todo=> (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed}>
              <TodoItemDetail/>
            </TodoItem>
          ))}
        </TodoList>

        <TodoBtn/>
      </Container>
      <NewTodoItemMenu/>
    </>
  );
}

export default App;
