import React from 'react'

export default function TodoForm() {
    const handleSubmit = (e) => {
        e.preventDefault()

        // const userInput = new FormData(e.target)

        // alert(userInput.get('todo'))
    }

  return (
    <>
        <div className="todo">
            <form onSubmit={handleSubmit} method="post">
                <div>
                    <label htmlFor="todo">New Task</label> <br />
                    <input type="text" name='todo' className='w-7 h-5 p-2' />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </>
  )
}
