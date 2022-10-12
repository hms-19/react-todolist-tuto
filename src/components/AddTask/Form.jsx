import React, { useState } from 'react'

const Form = ({addTask,error}) => {

  const [task,setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(task)
    setTask('')
  }

  return (
    <div>
        <form onSubmit={handleSubmit} className='d-flex gap-3'>
          <input 
            type="text" 
            value={task} 
            onChange={e => setTask(e.target.value)}
            placeholder='New Task' 
            className="form-control" />
          <input 
            type="submit" 
            value='Add' 
            className='btn btn-dark px-3' />
        </form>
        <p className="text-danger">{error}</p>
    </div>
  )
}

export default Form