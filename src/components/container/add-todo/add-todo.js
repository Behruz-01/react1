import { useRef } from "react";



const AddTodo = ({setTodos, todos}) => {
    const inputRef = useRef();


    const handleFormSubmit = (evt) =>{
        evt.preventDefault();

        const inputValue = inputRef.current.value;
        const newTodo = {
            id:Math.floor(Math.random() * 1000) ,
            name: inputValue,
        }

        // push qilish

        // const newTodos = [...todos];
        // newTodos.push(newTodo);
        // setTodos(newTodos);

        setTodos([newTodo, ...todos,]);

        inputRef.current.value = null;
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" />
            <button>Qo'shish</button>
        </form>
    )
}


export default AddTodo;