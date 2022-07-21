import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const AppContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);

  const sortedTodoList = [...todoList];

  sortedTodoList.sort((a, b) => new Date(b.time) - new DataTransfer(a.time));
  console.log(sortedTodoList);
  return (
    <div>
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList?.map((task) => <TodoItem {...task} key={task.id}/>)
        : "no todo found"}
    </div>
  );
};

export default AppContent;
