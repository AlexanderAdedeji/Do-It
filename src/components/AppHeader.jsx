import React, { useState } from "react";
import Button from "./Button";
import SelectButton from "./SelectButton";
import styles from '../styles/modules/app.module.scss'
import TodoModal from "./TodoModal";

const AppHeader = () => {
    const[openModal, setOpenModal] = useState(false)
  return (
    <div className={styles.appHeader}>
      <Button variant="Secondary" text="Click Me" type="button" onClick={()=>{
        setOpenModal(true)
      }}/>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">InComplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      {
        openModal &&   <TodoModal setOpenModal={setOpenModal}/>
      }
   
    </div>
  );
};

export default AppHeader;
