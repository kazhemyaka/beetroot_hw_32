import styles from "./Review.module.scss";

function Review({ text, image }) {
  return (
    <div className={styles.review}>
      <div className={styles.review__photo}>
        <img src={image} alt="Customer Photo" className={styles.review__img} />
      </div>
      <p className={styles.review__text}>{text}</p>
    </div>
  );
}

export default Review;
