import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/modules/todoItem.module.scss";

const checkVariants = {
  initial: {
    color: "#fff",
  },
  checked: {
    pathLength: 1,
  },
  unChecked: {
    pathLength: 0,
  },
};

const boxVariants = {
  checked: {
    background: "var(--primaryPurple)",
    transition: { duration: 0.2 },
  },
  unChecked: {
    background: "var(--gray-1)",
    transition: { duration: 0.2 },
  },
};

const CheckBox = ({ checked, toggleChecked }) => {
 

  return (
    <motion.div
      onClick={toggleChecked}
      className={styles.svg__box}
      variants={boxVariants}
      animate={checked ? "checked" : "unChecked"}
    >
      <motion.svg
        className={styles.svg}
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variant={checkVariants}
          animate={checked ? "checked" : "unchecked"}
        //   style={{pathLength, opacity}}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
};

export default CheckBox;
