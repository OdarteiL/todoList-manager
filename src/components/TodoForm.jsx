import React from 'react'
import '../App.css'
import { PaperPlaneRight } from '@phosphor-icons/react'

export default function TodoForm() {
  return (
    <>
      <div className="main-container">
        <div className="top"></div>
        <div className="background w-screen absolute top-[180px]">
          <div className="top-bg w-full relative" >
            <div className='w-[80%] mx-[10%] md:w-[70%] lg:w-[70%]'><label htmlFor="" className='text-white'>Task</label></div>
            <input type="text" placeholder='Your Task' className='w-[80%] mx-[10%] px-[3%] md:w-[80%]  lg:w-[80%]' />
            <button className=' absolute left-[82%] text-white p-[10px] rounded-r-[10px] bg-slate-950 md:left-[88%] '><PaperPlaneRight size={20} /></button>
          </div>
        </div>
      </div>
    </>
  )
}
