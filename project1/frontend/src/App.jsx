import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createtodo } from './components/Createtodo'
import { Todo } from './components/Todo'

// useEffect hook
function App() {
  const [todos,settodo]=useState([]);
  fetch("http://localhost:3000/todos").then(
    async(res)=>{
      const json= await res.json()
      settodo(json.todos)
    }
  )
  return(
    <div>
      <Createtodo/>
      <Todo todos={todos}></Todo>
    </div>
  )
}

export default App