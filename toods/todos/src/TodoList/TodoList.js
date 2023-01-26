import { TodoItem } from "../TodoItem/TodoItem"


export const TodoList = ({todos, doneTodo, deleteTodo}) => {
    return (
    <ul className="list-group">
        {
        todos.map((todo, inx) => 
        <TodoItem
        key={todo.id} 
        {...todo} 
        inx={inx} 
        doneTodo={doneTodo} 
        deleteTodo={deleteTodo}
        />)
        }
    </ul>
)

}