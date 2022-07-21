import React from "react";
import styles from "../styles/modules/button.module.scss";
import { getClasses } from "../utils/getClasses";

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};
const Button = ({text, variant, type, ...otherAttributes }) => {
  return (
    <button
      className={getClasses([
        styles.button,
        styles[`button--${buttonTypes[variant]}`],
      ])}
      type={type}
      {...otherAttributes}
    >
      {text}
    </button>
  );
};

export default Button;
