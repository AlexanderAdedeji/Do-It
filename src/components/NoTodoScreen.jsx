import NoTodoImg from "../assets/notodo.svg";
import styles from '../styles/modules/notodo.module.scss'
import React from "react";

const NoTodo = ({ text, button, btnText, btnAction }) => {
  return (
    <div id={styles.no__file}>
      <img src={NoTodoImg} alt="" width="200" />
      <p>{text}</p>
      {button && <button className="btn btn-success" onClick={() => btnAction()}>{btnText}</button>}
    </div>
  );
};

export default NoTodo;
