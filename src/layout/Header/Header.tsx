import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.css";

export const Header: FC = () => {
  return (
    <header>
      <a className={styles["logo"]} href="/" title="logo" aria-label="link to homepage">
        react-exchange
      </a>
      <div className={styles["wrapper__Navbar"]}>
        <div className={styles["wrapper__Links"]}>
          <a
            className={`${styles["separator-3"]} ${styles["Inter"]}`}
            title="Support"
            aria-label="link to support page"
            href="#"
          >
            Support
          </a>
          <div className={styles["separator-3"]}></div>
          <a className="Inter" href="#" title="Services" aria-label="link to services page">
            Services
          </a>
        </div>
        <div className={styles["separator-5"]}></div>
        <a className={styles["dropdown__Account"]} aria-label="open account menu">
          Account
          <div className={styles["wrapper__Icon"]}></div>
          <FontAwesomeIcon icon={["fas", "caret-down"]} size={"2xs"} />
        </a>
      </div>
      <button className={styles["button__Hamburger"]} title="hamburger-menu" aria-label="open mobile menu">
        <FontAwesomeIcon icon={["fas", "bars"]} size={"lg"} />
      </button>
    </header>
  );
};
