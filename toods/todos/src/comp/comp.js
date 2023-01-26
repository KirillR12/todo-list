/* 
App
const [todos, setTodos] = useState([])

const addNewTodo = (title) => {
  const newTodo = {
      title,
      id: Date.now(),
      status: false
  }
  setTodos(prev => [...todos, newTodo])
}

const deleteTodo = (id) => {
  setTodos(prev => prev.filter((todo) => todo.id !== id))
}


const doneTodo = (id) => {
  setTodos(prev => prev.map((todo) => {
    if (todo.id === id) {
      return {
      ...todo,
      status: !todo.status
    }
   } return todo
  }))
} 




main

<main>
    <ul className="list-group">
        {
            todos.map((todo, i) => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between">
            <span className={`d-flex align-items-center ${todo.status ? mainStyles.done : ''}`}>{i + 1}. {todo.title}</span>
            <div>
            <button onClick={() => doneTodo(todo.id)} type="button" className="btn mx-2 btn-success">Пометить</button>
            <button onClick={() => deleteTodo(todo.id)} type="button" className="btn btn-danger">Удалить</button>
             </div>
             </li>
            ))
        }
  </ul>
</main>




form

const [input, setInput] = useState('')

const dobal = (e) => {
  e.preventDefault()
  if (input) {
    addNewTodo(input)
    setInput('')
  }
} 

return ( 
<form onSubmit={dobal} className="d-flex flex-column align-items-center">
  <div className="mb-3">
    <input type="text"
    value={input}
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder="title" 
    aria-describedby='emailHelp'
    onChange={(e) => setInput(e.target.value)}
    />
  </div>

  <button type="submit" className="btn btn-primary">Add</button>
  </form>
  )
}












import { useState } from 'react'
import './App.css'
import { Header } from './Header/Header'
import { Main } from './Main/Main'


function App() {
  
const [todos, setTodos] = useState([])

const addNewTodo = (title) => {
  const newTodo = {
      title,
      id: Date.now(),
      status: false
  }
  setTodos(prev => [...todos, newTodo])
}

  return (
    <div className="container py-5">
      <Header addNewTodo={addNewTodo}/>
      <hr />
      <Main todos={todos}/>
      <hr />
    </div>
  )
}

export default App;

*/