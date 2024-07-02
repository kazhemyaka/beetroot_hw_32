import styles from "./NewCustomer.module.scss";

function NewCustomer({ name, image }) {
  return (
    <div className={styles.customer}>
      <div className={styles.customer__photo}>
        <img
          src={image}
          alt="Customer Photo"
          className={styles.customer__img}
        />
      </div>
      <p className={styles.customer__name}>{name}</p>
    </div>
  );
}

export default NewCustomer;
