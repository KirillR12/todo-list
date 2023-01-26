import { Form } from "./Form/Form"

export const Header = ({addNewTodo}) => {
    return ( 
       <header>
<Form addNewTodo={addNewTodo}/>
       </header>
    )
}