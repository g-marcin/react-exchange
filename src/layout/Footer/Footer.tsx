import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles["footer"]}>
      <a
        className={`${styles["wrapper__Footer__Item"]} ${styles["Inter"]} ${styles["opaque"]}`}
        href="https://github.com/g-marcin"
        aria-label="link to contacts"
        title="Contact us"
      >
        Contact us
      </a>

      <a
        className={`${styles["wrapper__Footer__Item"]} ${styles["Poppins"]} ${styles["opaque"]} ${styles["weight600"]}`}
        href="/"
        aria-label="link to homepage"
        title="Homepage"
      >
        react-exchange
      </a>
      <div className={styles["wrapper__Footer__Item"]}>
        <a
          className={styles["wrapper__Icon"]}
          href="https://www.facebook.com"
          title="Facebook"
          aria-label="link to facebook"
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} size={"lg"} />
        </a>
        <a
          className={styles["wrapper__Icon"]}
          href="https://www.instagram.com"
          title="Instagram"
          aria-label="link to instagram"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} size={"lg"} />
        </a>
        <a className={styles["wrapper__Icon"]} href="https://www.twitter.com" title="Twitter" aria-label="link to twitter">
          <FontAwesomeIcon icon={["fab", "twitter"]} size={"lg"} />
        </a>
      </div>
    </footer>
  );
};
