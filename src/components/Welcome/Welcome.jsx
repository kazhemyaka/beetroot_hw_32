import styles from "./Welcome.module.scss";
import dashboardImage from "./../../assets/dashboard.avif";
import { IoHome, IoCodeSharp } from "react-icons/io5";
import LinkButton from "../LinkButton/LinkButton";

function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcome__image}>
        <img
          src={dashboardImage}
          alt="React Admin"
          className={styles.welcome__img}
        />
      </div>
      <div className={styles.welcome__text}>
        <h1 className={styles.welcome__title}>Welcome to react-admin demo</h1>
        <p className={styles.welcome__description}>
          This is the admin of an imaginary poster shop. Fell free to explore
          and modify the data - it's local to your computer, and will reset each
          time you reload.
        </p>
        <div className={styles.welcome__buttons}>
          <LinkButton link="#" icon={<IoHome />}>
            React-admin site
          </LinkButton>
          <LinkButton link="#" icon={<IoCodeSharp />}>
            Source for this demo
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
