import { ClockClockwise, PlusCircle } from 'phosphor-react';
import { useState, FormEvent, useEffect, useRef } from 'react';

type Props = {
  onSubmit: any,
  edit?: any
}

export function TodoForm(props: Props) {
  const { onSubmit, edit } = props;
  const [input, setInput] = useState(edit ? edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false
    })

    setInput('');
  }

  const handleChange = (ev: any) => {
    setInput(ev.target.value)
  }

  return (
    <form className='w-[80vw] flex justify-items-stretch items-stretch' onSubmit={handleSubmit}>
      {edit ? (
        <>
          <input
            type={'text'}
            placeholder='Adicione uma tarefa'
            value={input}
            name='text'
            className='border-[2px] pt-3 grid-2 pl-8 pb-3 pr-4 border-orange-800 rounded-tr-none w-full rounded-br-none rounded-bl-lg rounded-tl-lg outline-none bg-transparent text-white placeholder:text-#[#e2e2e2]'
            onChange={handleChange}
            ref={inputRef}
          />
          <button
            type="submit"
            className='hover:opacity-80 border-[2px] flex rounded-br-lg rounded-tr-lg border-orange-800 bg-orange-800 cursor-pointer pt-3 pl-3 pb-3 pr-3 text-white capitalize rounded-sm'
          >
            <ClockClockwise size={32} />
          </button>
        </>
      ) : (
        <>
          <input
            type={'text'}
            placeholder='Adicione uma tarefa'
            value={input}
            name='text'
            className='border-[2px] pt-3 grid-2 pl-8 pb-3 pr-4 border-blue-800 rounded-tr-none w-full rounded-br-none rounded-bl-lg rounded-tl-lg outline-none bg-transparent text-white placeholder:text-#[#e2e2e2]'
            onChange={handleChange}
            ref={inputRef}
          />
          <button
            type="submit"
            className='hover:opacity-80 border-[2px] flex rounded-br-lg rounded-tr-lg border-blue-800 bg-blue-800 cursor-pointer pt-3 pl-3 pb-3 pr-3 text-white capitalize rounded-sm'
          >
            <PlusCircle size={32} />
          </button>
        </>
      )}
      
    </form>
  )
}
