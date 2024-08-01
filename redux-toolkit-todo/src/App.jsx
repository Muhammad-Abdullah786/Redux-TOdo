import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>ract redux and todo</h1>
      <div>
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
