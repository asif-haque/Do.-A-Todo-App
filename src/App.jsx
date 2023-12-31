import { useEffect, useState } from "react";
import NewItemForm from "./components/NewItemForm";
import TodoList from "./components/TodoList";

export default function App() {
  // being used in multiple child components, so declared inside parent
  const [todoList, setTodoList] = useState(() => {
    const localValue = localStorage.getItem("items");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <NewItemForm todoList={todoList} setTodoList={setTodoList} />
      <h1 className="header">Your Todo List</h1>
      {todoList.length === 0 && "No task"}
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}
