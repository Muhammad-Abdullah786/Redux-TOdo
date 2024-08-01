import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

// here we will use useSelector to list all todos
// but there will be an delete button too so we will use usedispatch to delete todo
function Todo() {
  // seletctor always has arg called state
  // with this state u can select anything from the store
  const alltodos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todo</div>
      {alltodos.map((todo) => {
        return (
          <li key={todo.id}>
            <input type="text" value={todo.text} />
            <button
              onClick={(e) => {
                // e.preventDefault
                dispatch(removeTodo(todo.id));
              }}
            >
              X
            </button>
          </li>
        );
      })}
    </>
  );
}

export default Todo;
