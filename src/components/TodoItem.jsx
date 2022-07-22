import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { MdDelete, MdEdit } from "react-icons/md";
import styles from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { deleteTodo, editTodo } from "../store/slices/todoSlice";
import TodoModal from "./TodoModal";
import CheckBox from "./CheckBox";
const TodoItem = ({ todoItem }) => {
  const { id, title, status, time } = todoItem;
  const [openModal, setOpenModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todoItem.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }

    // return () => {
    //   second
    // }
  }, [todoItem]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTodo(id));
        toast.success("Task Deleted Successfully");
        Swal.fire("Deleted!", "Your todo has been deleted.", "success");
      }
    });
  };
  const handleEdit = () => {
    setOpenModal(true);
  };

  const toggleChecked = () => {
    console.log("getting here");
    dispatch(
      editTodo({
        ...todoItem,
        status: checked ? "incomplete" : "complete",
      })
    );

    setChecked(!checked);

    toast.success("Task Update Successfully");
  };
  return (
    <div className={styles.item}>
      <div className={styles.todo__details}>
        <CheckBox checked={checked} toggleChecked={toggleChecked} />
        <div className={styles.texts}>
          <p
            className={getClasses([
              styles.todo__text,
              status === "complete" && styles["todo__text--completed"],
            ])}
          >
            {title}
          </p>
          <p className={styles.time}>
            {format(new Date(time), "p, MM/dd/yyyy")}
          </p>
        </div>
      </div>
      <div className={styles.todo__actions}>
        <div className={styles.icon} onClick={handleDelete}>
          <MdDelete />
        </div>
        <div className={styles.icon} onClick={handleEdit}>
          <MdEdit />
        </div>
      </div>
      {openModal && (
        <TodoModal
          type="Update"
          setOpenModal={setOpenModal}
          todoItem={todoItem}
        />
      )}
    </div>
  );
};

export default TodoItem;
