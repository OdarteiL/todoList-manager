import React from 'react'
import '../App.css'
import { PaperPlaneRight } from '@phosphor-icons/react'

export default function TodoForm() {
  return (
    <>
      <div className="main-container">
        <div className="top"></div>
        <div className="background w-screen absolute top-[180px]">
          <form className="top-bg w-full relative" >
            <input type="text" placeholder='Your Task' className='mx-[10%] w-[80%] px-[3%] md:w-[80%]  lg:w-[80%]' />
            <button className=' absolute left-[82%] text-white p-[10px] rounded-r-[10px] bg-slate-950 md:left-[85.3%] lg:left-[87.5%] '><PaperPlaneRight size={20} /></button>
          </form>
        </div>
      </div>
    </>
  )
}
