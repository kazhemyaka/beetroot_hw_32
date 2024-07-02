import { IconContext } from "react-icons";
import styles from "./LinkButton.module.scss";

function LinkButton({ link, children, icon }) {
  return (
    <a className={styles.button__link} href={link}>
      <IconContext.Provider value={{ size: "25px", color: "black" }}>
        {icon}
      </IconContext.Provider>
      <span className={styles.button__text}>{children}</span>
    </a>
  );
}

export default LinkButton;
