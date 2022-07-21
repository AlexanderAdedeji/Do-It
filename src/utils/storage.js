export const getTodoList = () => {
  const localTodoList = window.localStorage.getItem("todoList");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  setTodoList([])
  return []
};

export const setTodoList = (todoListArr) => {
  window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
};
