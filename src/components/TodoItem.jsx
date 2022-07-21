import React from "react";
import {format} from 'date-fns'
import { useDispatch } from "react-redux";
import {MdDelete,MdEdit} from 'react-icons/md'
import styles from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { deleteTodo } from "../store/slices/todoSlice";
const TodoItem = ({id, title, status, time }) => {

    const dispatch = useDispatch()
    const handleDelete =() =>{
        console.log('delete')
        dispatch(deleteTodo(id))
    }
    const handleEdit =() =>{
        console.log('Edit')
    }
  return (
    <div className={styles.item}>
      <div className={styles.todo__details}>
        <div className={styles.texts}>
          <p
            className={getClasses([
              styles.todo__text,
              status === "complete" && styles["todo__text--completed"],
            ])}
          >
            {title}
          </p>
          <p className={styles.time}>{format(new Date(time), 'p, MM/dd/yyyy')}</p>
        </div>
      </div>
      <div className={styles.todo__actions}>
        <div className={styles.icon} onClick={handleDelete}>
            <MdDelete/>
          
        </div>
        <div className={styles.icon} onClick={handleEdit}>
        <MdEdit />
          
        </div>
    
      </div>
    </div>
  );
};

export default TodoItem;


