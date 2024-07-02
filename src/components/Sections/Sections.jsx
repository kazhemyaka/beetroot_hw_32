import styles from "./Sections.module.scss";
import Statistic from "../Statistic/Statistic";
import Welcome from "../Welcome/Welcome";
import { IoCash, IoCart, IoChatbox, IoPersonAdd } from "react-icons/io5";
import Reviews from "../Reviews/Reviews";
import NewCustomers from "../NewCustomers/NewCustomers";
import Orders from "../Orders/Orders";

function Sections() {
  return (
    <div className={styles.sections}>
      <div className={styles.sections__revenue}>
        <Statistic
          icon={<IoCash />}
          title="Monthly Revenue"
          value="1 385 $US"
          color="#306f8e"
        />
      </div>
      <div className={styles.sections__newOrders}>
        <Statistic
          icon={<IoCart />}
          title="New Orders"
          value="12"
          color="#f09737"
        />
      </div>
      <div className={styles.sections__welcome}>
        <Welcome />
      </div>
      <div className={styles.sections__pendingOrders}>
        <Orders />
      </div>
      <div className={styles.sections__reviews}>
        <Statistic
          icon={<IoChatbox />}
          title="Pending Reviews"
          value="3"
          color="#ea4134"
        >
          <Reviews />
        </Statistic>
      </div>
      <div className={styles.sections__customers}>
        <Statistic
          icon={<IoPersonAdd />}
          title="New Customers"
          value="9"
          color="#53af50"
        >
          <NewCustomers />
        </Statistic>
      </div>
    </div>
  );
}

export default Sections;
