import styles from "./Order.module.scss";

function Order({ datetime, customer, customerImage, itemsCount, total }) {
  return (
    <div className={styles.order}>
      <div className={styles.order__info}>
        <div className={styles.order__photo}>
          <img
            src={customerImage}
            alt="Customer Photo"
            className={styles.order__img}
          />
        </div>
        <div className={styles.order__infotext}>
          <p className={styles.order__datetime}>{datetime}</p>
          <p className={styles.order__customer}>
            by {customer}, items: {itemsCount}
          </p>
        </div>
      </div>
      <p className={styles.order__total}>{total}</p>
    </div>
  );
}

export default Order;
