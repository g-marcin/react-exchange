import { FC } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.css";

export const Header: FC = () => {
  return (
    <header>
      <NavLink to="/" className={styles["logo"]} title="logo" aria-label="link to homepage">
        react-exchange
      </NavLink>
      <div className={styles["wrapper__Navbar"]}>
        <div className={styles["separator-5"]}></div>
        <NavLink to="/admin" className={styles["dropdown__Account"]} aria-label="open account menu">
          Admin
          <div className={styles["wrapper__Icon"]}></div>
          <FontAwesomeIcon icon={["fas", "caret-down"]} size={"2xs"} />
        </NavLink>
      </div>
      <button className={styles["button__Hamburger"]} title="hamburger-menu" aria-label="open mobile menu">
        <FontAwesomeIcon icon={["fas", "bars"]} size={"lg"} />
      </button>
    </header>
  );
};
