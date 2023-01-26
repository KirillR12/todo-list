import { useState } from "react"

export const Form = ({addNewTodo}) => {

const [input, setInput] = useState('')

const dobav = (e) => {
  e.preventDefault()
  if (input) {
    addNewTodo(input)
    setInput('')
  }
}

return ( 
<form onSubmit={dobav}
className="d-flex flex-column align-items-center">
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

  <button type="submit" className="btn btn-primary">Добавить</button>
  </form>
  )
}