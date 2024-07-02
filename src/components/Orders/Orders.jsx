import styles from "./Orders.module.scss";
import Order from "../Order/Order";
import ORDERS from "./data";

function Orders() {
  return (
    <div className={styles.orders}>
      <h2 className={styles.orders__title}>Pending Orders</h2>
      <div className={styles.orders__items}>
        {ORDERS.map((order, index) => (
          <Order key={index} {...order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
