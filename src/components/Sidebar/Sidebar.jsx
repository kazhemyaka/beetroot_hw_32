import styles from "./Sidebar.module.scss";
import classNames from "classnames";
import { useSidebar } from "../../context/SidebarContext";
import SidebarItem from "../SidebarItem/SidebarItem";
import { IoGrid, IoCash, IoImages, IoPeople, IoChatbox } from "react-icons/io5";

function Sidebar() {
  const { isSidebarOpen } = useSidebar();

  const sidebarClasses = classNames(styles.sidebar, {
    [styles["sidebar--open"]]: isSidebarOpen,
  });

  return (
    <aside className={sidebarClasses}>
      <ul className={styles.sidebar__list}>
        <SidebarItem icon={<IoGrid />}>Dashboard</SidebarItem>
        <SidebarItem icon={<IoCash />}>Sales</SidebarItem>
        <SidebarItem icon={<IoImages />}>Catalog</SidebarItem>
        <SidebarItem icon={<IoPeople />}>Customers</SidebarItem>
        <SidebarItem icon={<IoChatbox />}>Reviews</SidebarItem>
      </ul>
    </aside>
  );
}

export default Sidebar;
