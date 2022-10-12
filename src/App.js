import { useState } from 'react';
import './App.css';
import Form from './components/AddTask/Form';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';


function App() {

  const [header, setHeader] = useState("To Do List")
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('');

  // Add Task Func
  const addTask = (newTask) => {
    if(newTask !== '' && newTask !== null){
      return setTasks([...tasks,newTask])
    }
    else{
        setError("Task Doesn't Empty")
    }
  }

  //clean error message
  if(error !== ''){
      setInterval(() => setError(''),8000)
  }

  //remove task
  const removeTask = (id) => {
    setTasks(tasks.filter((t,key) => key !== id))
  }
  

  return (
    <div className="container mt-5">
        <div className='row'>
            <div className='col-12 my-3'>
                <Header title={header} />
            </div>
            <div className='col-md-8 mx-auto'>
                <Form addTask={addTask} error={error} />
            </div>
            <div className="col-md-8 my-2 mx-auto">
                <Tasks tasks={tasks} removeTask={removeTask} />
            </div>
        </div>
    </div>
  );
}

export default App;
