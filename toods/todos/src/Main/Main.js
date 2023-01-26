import { TodoList } from "../TodoList/TodoList"


export const Main = ({todos, deleteTodo, doneTodo}) => {

if (!todos.length) {
    return <p>Список пуст...</p>
}

    return (
    <main>
    <TodoList todos={todos} deleteTodo={deleteTodo} doneTodo={doneTodo}/>
    </main>
)
}