import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todo/todoSlice";
function AddTOdo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandeler = (e) => {
    e.preventDefault;
    // dispatch reducer ko use kar ke store me value to change karta hai
    dispatch(addTodo(input));
    setInput("");
  };

  const removeTodoHandler = () => {
    
  }

  const handleSubmit = () => {};
  return (
    <>
      <div>AddTOdo</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Todo..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>

      <button type="submit">Add Todo</button>
    </>
  );
}

export default AddTOdo;
