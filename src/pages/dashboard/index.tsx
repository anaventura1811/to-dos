import React from 'react'
import { Header } from '../../components/header'
import { TodoList } from '../../components/todo-list'

type Props = {}

export function Dashboard({}: Props) {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-start w-[90vw] min-h-[80vh] p-5 font-sans items-center mt-[10vw] mb-[10vw] ml-auto mr-auto rounded-xl bg-[rgb(22,26,43)]'>
        <TodoList />
      </div>
    </>
  )
}
