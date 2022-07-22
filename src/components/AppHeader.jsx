import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import Button from "./Button";
import SelectButton from "./SelectButton";
import styles from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";
import { filterTodo } from "../store/slices/todoSlice";

const AppHeader = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const filterTodoHandler = (filter) => {
    dispatch(filterTodo(filter));
  };

  return (
    <div className={styles.appHeader}>
      <Button
        variant="primary"
        text="Click Me"
        type="button"
        onClick={() => {
          setOpenModal(true);
        }}
      />
      <SelectButton
        id="status"
        onChange={(e) => {
          filterTodoHandler(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="incomplete">InComplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      {openModal && <TodoModal type="Add" setOpenModal={setOpenModal} />}
    </div>
  );
};

export default AppHeader;
