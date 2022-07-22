import NoTodoImg from "../assets/notodo.gif";
import styles from '../styles/modules/notodo.module.scss'
import React from "react";

const NoTodo = ({ text, button, btnText, btnAction }) => {
  return (
    <div id={styles.no__file}>
      <img src={NoTodoImg} alt="" width="300" />
      <p>{text}</p>
      {button && <button className="btn btn-success" onClick={() => btnAction()}>{btnText}</button>}
    </div>
  );
};

export default NoTodo;
