import { getClasses } from "../utils/getClasses";

import styles from "../styles/modules/button.module.scss";

const SelectButton = ({ children, ...selectAttributes }) => {
  return (
    <select
      {...selectAttributes}
      className={getClasses([styles.button, styles.button__select])}
   
    >
      {children}
    </select>
  );
};

export default SelectButton;
