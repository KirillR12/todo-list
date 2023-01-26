import './App.css'
import { useTodos } from './customHooks/useTodos';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';



function App() {

const {todos, addNewTodo, doneTodo, deleteTodo, deleteAllTodo} = useTodos()

  return (
    <div className="container py-5">
      <Header addNewTodo={addNewTodo}/>
      <hr />
      <Main  todos={todos} deleteTodo={deleteTodo} doneTodo={doneTodo}/>
      <hr />
      <Footer deleteAllTodo={deleteAllTodo} />
    </div>
  )
}


export default App;


