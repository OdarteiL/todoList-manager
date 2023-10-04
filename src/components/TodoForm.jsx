import React from 'react'
import '../App.css'

export default function TodoForm() {
  return (
    <>
        <div className="w-screen h-full bg-[url(../public/img2.jpg)]">
            <div className="todo-container bg-slate-600 bg-opacity-[95%] text-white h-screen w-[90%] mx-[5%] md:w-[70%] mx-auto">

              <div className="title text-center flex justify-center align-middle">
                <h1>Todo List</h1>
              </div>
              <br />
              <hr />
              <br />

              <div className="todo-wrapper block px-10 w-full md:flex lg:flex ">
                <div className="title-input mr-[100px]">
                  <label htmlFor="title" className='mr-3'>Title</label>
                  <input type="text" />
                </div>

                <div className="description mr-5">
                  <label htmlFor="description" className='mr-5'>Description</label>
                  <input type="text" className=' w-[300px] ' />
                </div>

                <button type="submit" className='px-4 bg-slate-50 text-slate-700'>Add</button>
              </div>
              <br />
              <hr />
              <hr />

              <div className="content mt-5 px-10">
                Task 1
              </div>

              <div className="general-btn mt-5 px-10">
                <button className='px-4 bg-slate-50 text-slate-700 mr-5'>Todo</button>
                <button className='px-4 bg-slate-50 text-slate-700'>Complete</button>
              </div>

            </div>
        </div>
    </>
  )
}
