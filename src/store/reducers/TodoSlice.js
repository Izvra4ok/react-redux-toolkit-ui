import {createSlice} from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
    },
    reducers: {
        setTodo: (state, action) => {
                state.todos.push(action.payload)
        },
        toggleCompleted: (state, action) => {
            const toggleTodo = state.todos.find((todo) => todo.id === action.payload)
            toggleTodo.completed = !toggleTodo.completed;
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})


export const {setTodo, toggleCompleted, deleteTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
