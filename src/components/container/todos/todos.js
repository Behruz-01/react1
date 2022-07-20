const Todos = ({todos}) => {
    return(
        <ul  className="todos">
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.name}
                    
                </li>
            ))}
        </ul>
    )
}


export default Todos;