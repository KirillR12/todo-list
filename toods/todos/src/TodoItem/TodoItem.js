import todoItemStyles from "./styles.module.css"

export const TodoItem = ({id, title, status, inx, doneTodo, deleteTodo}) => {
 return (
    <li 
    className="list-group-item d-flex justify-content-between"
    >
        <span 
        className={`d-flex align-items-center 
        ${status ? todoItemStyles.done : ''}`}
        >
            {inx + 1}. {title}
            </span>
        <div>
        <button 
        onClick={() => doneTodo(id)} 
        type="button" 
        className="btn mx-2 btn-success"
        >
            Пометить
        </button>
        <button 
        onClick={() => deleteTodo(id)} 
        type="button" 
        className="btn btn-danger" 
        >
            Удалить
            </button>
     
         </div> 
           
    </li>
 )   
}