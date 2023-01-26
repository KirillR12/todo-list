import { useEffect, useState } from "react"
import { TODOS_KEY_LS } from "../utils/constant"


export const useTodos = () => {
    const [todos, setTodos] = useState([])

  useEffect(() => {
    const todosFromLS = localStorage.getItem(TODOS_KEY_LS)
    const prepareTodos = todosFromLS ? JSON.parse(todosFromLS) : []
    
    if (prepareTodos.length) {
    setTodos(prepareTodos)
    }
  }, [])

  useEffect(() => {
localStorage.setItem(TODOS_KEY_LS, JSON.stringify(todos))
  }, [todos])

  const addNewTodo = (title) => {
    const newTodo = {
      title,
      id: Date.now(),
      status: false
    }
    setTodos(prev => [...prev, newTodo])
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

const deleteAllTodo = () => {
    setTodos([])
}

return {
    todos,
    doneTodo,
    addNewTodo,
    deleteTodo,
    deleteAllTodo
}
}