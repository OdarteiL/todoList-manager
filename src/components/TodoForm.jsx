import React from 'react'
import '../App.css'

export default function TodoForm() {
  return (
    <>
        <div className="todo-container">
            <h1>My Todo's</h1>

            <div className="todo-wrapper">
                <div className="title">
                    <label htmlFor="Input">Task Title</label>
                    <input type="text" placeholder='eg. Go to the bank' />
                </div>

                <div className="desc">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="" cols="35" rows="1"></textarea>
                </div>

                <div className="todo-submit">
                    <button type="submit">Add Task</button>
                </div>
            </div>
            <br />
            <hr className=' bg-black' />

            <div className="general-btn">
                <button type="submit">Todo</button>
                <button type="submit">Completed</button>
            </div>

            <div className="task-content">
                <h2>Task 1</h2>
            </div>
        </div>
    </>
  )
}
