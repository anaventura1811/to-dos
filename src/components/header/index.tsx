import React from 'react'

type Props = {}

export function Header({}: Props) {
  return (
    <header className='flex w-screen pl-8 justify-start self-center'>
      <h1 className='font-display text-2xl mt-4 mb-8 mr-0 ml-0'>Listly</h1>
    </header>
  )
}