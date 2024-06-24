import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button"; 
import CounterComp from "./components/CounterComp"; "./components/CounterComp";

import "./style.css";

const App = () => {
  return (
    <div className="todo-container">
      {/* <CounterComp /> */}
      <Header title = "TO DO LISTZ" />
      <TodoItem text = "Eat" />
      <TodoItem completed = {false} text = "Play" />
      <TodoItem text = "Study" />
      <TodoItem text = "Walk" />
      <TodoItem text = "Run" />
      <Button />
    </div>
  );
}

export default App;
