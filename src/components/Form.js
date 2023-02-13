import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import {setTodo} from "../store/reducers/TodoSlice";

const Form = () => {

    const dispatch = useDispatch();

    const [todoValue, setTodoValue] = useState("");

    const handleAddTodo = () => {
        const todo = {
            id: v4(),
            text: todoValue,
            completed: false,
        }
        if (todo.text !== "") {
            dispatch(setTodo(todo));
            setTodoValue("");
        }
    }

    return (

        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>

            <input value={todoValue}
                   onChange={(e) => {
                       setTodoValue(e.target.value)
                   }}
                   type='text'
                   placeholder='Type something...'
                   className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />

            <button onClick={handleAddTodo}
                    type='submit'
                    className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
            >
                Submit
            </button>
        </form>
    )
}

export default Form
