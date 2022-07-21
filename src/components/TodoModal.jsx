import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { addTodo } from "../store/slices/todoSlice";
import styles from "../styles/modules/modal.module.scss";
import Button from "./Button";

const TodoModal = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const [todoTask, setTodoTask] = useState({
    title: "",
    status: "incomplete",
  });
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoTask);
    if (!todoTask.title || !todoTask.status) {
      toast.error("Title of Task Required")
      return
    }

    dispatch(
      addTodo({
        id: uuid(),
        ...todoTask,
        time: new Date().toLocaleString()
      })
    );
    closeModalHandler()
    toast.success("Task Added Successfully")
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.close__button} onClick={closeModalHandler}>
          <MdOutlineClose />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.form__title}>Add Task</h1>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              value={todoTask.title}
              onChange={(e) => {
                setTodoTask((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }));
              }}
            />
          </label>

          <label htmlFor="status">
            Status
            <select
              name="status"
              id="status"
              value={todoTask.status}
              onChange={(e) => {
                setTodoTask((prevState) => ({
                  ...prevState,
                  status: e.target.value,
                }));
              }}
            >
              <option value="incomplete">InComplete</option>
              <option value="complete">Complete</option>
            </select>
          </label>
          <div className={styles.buttonContainer}>
            <Button type="submit" variant="primary" text="Add Task">
              Add Task
            </Button>
            <Button
              type="button"
              variant="secondary"
              text="Cancel"
              onClick={closeModalHandler}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoModal;
