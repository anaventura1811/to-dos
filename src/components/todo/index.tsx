import { CheckCircle, PencilSimpleLine, XCircle } from 'phosphor-react';
import React, { useState } from 'react'
import {TodoForm} from '../todo-form';
import { TodoList } from '../todo-list';

type Props = {
  todos: {
    id: number;
    text: string;
    isComplete: boolean;
  }[];
  completeTodo: Function;
  removeTodo: Function;
  updateTodo: Function;
}

export function Todo(props: Props) {
  const { todos, completeTodo, removeTodo, updateTodo } = props;

  const [edit, setEdit] = useState({
    id: 0,
    value: ''
  });

  const [isComplete, setComplete] = useState(null);


  const submitUpdate = (val: {id: number; text: string; isComplete: boolean}) => {
    console.log( 'val', val);
    updateTodo(edit.id, val);
    setEdit({
      id: 0,
      value: ''
    });
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  // Abrir modal para perguntar se deseja marcar task como concluída
  

  return(
    <>
      {todos.map((todo, index) => {
         return (
         <div
            className={`flex justify-between items-start gap-2 w-full p-4 ${todo.isComplete ? 'line-through opacity-40': ''}`}
            key={index}
          >
            <div className='flex self-start' key={todo.id} onClick={() => completeTodo(todo.id)} >
              {todo.text}
            </div>
            <div className='flex'>
              <XCircle
                size={24}
                onClick={() => removeTodo(todo.id)}
              />
              <PencilSimpleLine
                size={24}
                onClick={() => setEdit({ id: todo.id, value: todo.text})}
              />

            </div>
      
          </div>
        )}) 
      }
    </>
   
  )
}
