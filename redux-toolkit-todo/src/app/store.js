import { configureStore } from "@reduxjs/toolkit"
import { todoReducer } from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: todoReducer
}) // configurestore takes  object most of the time

// 1 step is done now we have to create reducers