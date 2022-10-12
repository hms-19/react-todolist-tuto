import React from 'react'
import { BiTrash } from "react-icons/bi";
const Task = ({task,remove}) => {

    const handleRemove = (id) => {
        if(window.confirm('was you done?')){
            remove(id)
        }
    }

  return (
    <div>
        <div className='card my-2 bg-white shadow-sm text-muted'>
                <div className='card-body d-flex justify-content-between align-items-center'>
                    <p className='my-auto'>
                        {task.name}
                    </p>
                    <button className="btn btn-light border-0" onClick={() => handleRemove(task.id)}>
                        <BiTrash />
                    </button>
                </div>
        </div>
    </div>
  )
}

export default Task