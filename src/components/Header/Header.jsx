import styles from "./Header.module.scss";
import { IoMenuSharp, IoReload, IoPersonCircle } from "react-icons/io5";
import { IconContext } from "react-icons";
import headerSprite from "../../assets/header.svg";
import { useSidebar } from "../../context/SidebarContext";

function Header() {
  const { setIsSidebarOpen } = useSidebar();

  const handleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <IconContext.Provider value={{ color: "white", size: "35px" }}>
        <IoMenuSharp
          onClick={handleSidebar}
          className={styles.header__burger}
        />
      </IconContext.Provider>
      <svg className={styles.header__logo}>
        <use href={headerSprite + "#Dashboard"}></use>
      </svg>
      <div className={styles.header__icons}>
        <IconContext.Provider value={{ color: "white", size: "35px" }}>
          <IoReload />
          <IoPersonCircle />
        </IconContext.Provider>
      </div>
    </header>
  );
}

export default Header;
