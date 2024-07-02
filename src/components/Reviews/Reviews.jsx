import Review from "../Review/Review";
import styles from "./Reviews.module.scss";
import REVIEWS from "./data";

function Reviews() {
  return (
    <div className={styles.reviews}>
      {REVIEWS.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
  );
}

export default Reviews;
