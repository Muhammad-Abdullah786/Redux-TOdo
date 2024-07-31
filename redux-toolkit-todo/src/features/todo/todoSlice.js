import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = createSlice({
    todos: [{ id: 1, text: "hello world", completed: false }]
})


export const todoSlice = createSlice({
    name: "todo", // name is the property given by redux
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            })

        },
        removeTodo: (state, action) => {
            state.todos.filter((todo) => { todo.id !== action.payload.id })
        },
        updateTodo: (state, action) => {
            state.todos.forEach((todo) =>  )
        }
    }
})

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions
// why we are exporting these two because store need these too
export default todoSlice.reducer