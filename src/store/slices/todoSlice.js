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
      state.todoList.push(action.payload);
      setTodoList(state.todoList);
      return state;
    },

    deleteTodo: (state, action) => {
      const todoList = getTodoList();
      const new_todo_list = todoList.filter(
        (task) => task.id !== action.payload
      );
      setTodoList(new_todo_list);
      state.todoList = getTodoList();
      return state;
    },
    editTodo: (state, action) => {
      const todoList = getTodoList();
      console.log(action.payload)
      const new_todo_list = todoList.map((task) => {
        debugger
        return task.id === action.payload.id ? action.payload : task;
      });
      setTodoList(new_todo_list);
      state.todoList = getTodoList();
    },
  },
});

export const { addTodo, deleteTodo,editTodo } = todoSlice.actions;
export default todoSlice.reducer;
