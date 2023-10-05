import React from 'react'
import '../App.css'
import { ListChecks } from '@phosphor-icons/react'
import { Trash } from '@phosphor-icons/react'
import { PencilLine } from '@phosphor-icons/react/dist/ssr'

export default function TodoContent() {
  return (
    <>
        <div className="content mx-[10%] mt-7 bg-white absolute top-[32%] rounded w-[80%] h-[50%] px-7 py-5 shadow-lg  md:w-[80%]">
            <div className='flex align-middle mb-3'>
                <ListChecks size={20} /> <h1 className='ml-1'>Activities</h1>
            </div>
            <hr />
            <br />

            <ul>
                <div className='flex justify-between'>
                    <li>Cook Food</li>
                    <div className='flex'>
                        <button><Trash size={17} className='mr-2'/></button>
                        <button><PencilLine size={17} /></button>
                    </div>
                </div>
                <hr />
            </ul>
        </div>
    </>
  )
}
