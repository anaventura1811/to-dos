import React, { useState } from 'react';
import { Todo } from '../todo';
import { TodoForm } from '../todo-form'  

type Props = {}

interface TodoProps {
  id: number;
  text: string;
  isComplete: boolean;
}

export function TodoList({}: Props) {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const addTodo = (todo: { text: string; id: number; isComplete: boolean}) => {
    if (!todo.text || /ˆ\s*$/.test(todo.text)) {
      return;
    } 

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log('new todos', newTodos);
  }

  const completeTodo = (id: number) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const removeTodo = (id: number) => {
    const removeArr = [...todos].filter((todo) => todo.id 
    !== id);

    setTodos(removeArr);
  }

  const updateTodo = (todoID: number, newValue: { id: number, text: string; isComplete: boolean }) => {
    if (!newValue.text || /ˆ\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map((item) => (item.id === todoID ? newValue : item)))
  }

  return (
    <div className='flex items-center pl-4 pr-4 gap-2 flex-col'>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />
    </div>
  )
}
