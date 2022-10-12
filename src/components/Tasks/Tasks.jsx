import React from 'react'
import Task from './Task'

const Tasks = ({tasks,removeTask}) => {
  return (
    <div>
        {
            tasks.map((task,key) => {
                return <Task key={key} task={{name:task,id:key}} remove={removeTask} />
            } )
        }
    </div>
  )
}

export default Tasks