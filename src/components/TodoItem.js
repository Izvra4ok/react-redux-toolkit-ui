import React from 'react'
import {useDispatch} from "react-redux";
import {deleteTodo, toggleCompleted} from "../store/reducers/TodoSlice";

const TodoItem = ({todo}) => {

    const dispatch = useDispatch();

    const toggleTodoHandler = (id) => {
        dispatch(toggleCompleted(id))
    };

    const deleteTodoHandler = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <div className='flex justify-between items-center my-2'>

            <div
                onClick={() => toggleTodoHandler(todo.id)}
                className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'>
                Complete
            </div>

            <div className={`text-sm ${todo.completed ? 'line-through font-medium text-lime-400' : ''}`}>
                {todo.text}
            </div>

            <div
                onClick={() => deleteTodoHandler(todo.id)}
                className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'>
                Delete
            </div>
        </div>
    )
}

export default TodoItem
