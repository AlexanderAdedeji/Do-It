import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/modules/app.module.scss";
import NoTodo from "./NoTodoScreen";
import TodoItem from "./TodoItem";

const AppContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);

  const sortedTodoList = [...todoList];

  sortedTodoList.sort((a, b) => new Date(b.time) - new DataTransfer(a.time));
  console.log(sortedTodoList);
  return sortedTodoList && sortedTodoList.length > 0 ? (
    <div className={styles.content__wrapper}>
      {sortedTodoList.map((task) => (
        <TodoItem todoItem={task} key={task.id} />
      ))}
    </div>
  ) : (
    <NoTodo />
  );
};

export default AppContent;
