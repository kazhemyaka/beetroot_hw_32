import styles from "./SidebarItem.module.scss";
import { IconContext } from "react-icons";

function SidebarItem({ icon, children }) {
  return (
    <li className={styles.sidebar__item}>
      <IconContext.Provider value={{ size: "25px" }}>
        {icon}
      </IconContext.Provider>
      <span>{children}</span>
    </li>
  );
}

export default SidebarItem;
