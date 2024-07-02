import styles from "./Review.module.scss";
import { MdStars } from "react-icons/md";
import { IconContext } from "react-icons";

function Review({ text, image }) {
  return (
    <div className={styles.review}>
      <div className={styles.review__photo}>
        <img src={image} alt="Customer Photo" className={styles.review__img} />
      </div>
      <div className={styles.review__customer}>
        <IconContext.Provider
          value={{ size: "20px", className: styles.review__icon }}
        >
          <MdStars />
        </IconContext.Provider>
        <p className={styles.review__text}>{text}</p>
      </div>
    </div>
  );
}

export default Review;
