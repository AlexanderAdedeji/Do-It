import { createSlice } from "@reduxjs/toolkit";
import { getTodoList, setTodoList } from "../../utils/storage";

const initialValue = {
  todoList: getTodoList(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      const todoList = getTodoList();
      todoList.push(action.payload)
      setTodoList(todoList);
      return todoList
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
