import styles from "./NewCustomers.module.scss";
import NEW_CUSTOMERS from "./data";
import NewCustomer from "../NewCustomer/NewCustomer";

function NewCustomers() {
  return (
    <div className={styles.customers}>
      {NEW_CUSTOMERS.map((customer, index) => (
        <NewCustomer key={index} {...customer} />
      ))}
    </div>
  );
}

export default NewCustomers;
