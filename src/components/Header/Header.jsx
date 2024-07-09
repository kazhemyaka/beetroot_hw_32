import styles from "./Header.module.scss";
import { IoMenuSharp, IoReload, IoPersonCircle } from "react-icons/io5";
import { IconContext } from "react-icons";
import dashboardLogo from "../../assets/Dashboard-cropped.svg";
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
      <img
        src={dashboardLogo}
        alt="Dashboard Logo"
        className={styles.header__logo}
      />
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
