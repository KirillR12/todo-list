import React from "react"

let Footer = ({deleteAllTodo}) => {
return (
    <footer className="d-flex flex-column align-items-center">
      <button 
        onClick={deleteAllTodo} 
        type="button" 
        className="btn btn-danger">
        Удалить
        </button>  
    </footer>
)
}

Footer = React.memo(Footer)

export {
    Footer
}