import { FC, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CurrencyContext } from "../../contexts";
import styles from "./header.module.css";

export const Header: FC = () => {
  const navigate = useNavigate();
  const { presentCurrency } = useContext(CurrencyContext);
  return (
    <header>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? `${styles["logo"]} ${styles["pending"]}`
            : isActive
            ? `${styles["logo"]} ${styles["active"]}`
            : styles["logo"]
        }
        title="logo"
        aria-label="link to homepage"
      >
        react-exchange
      </NavLink>
      <div className={styles["wrapper__Navbar"]}>
        <NavLink
          to={`/details/${presentCurrency?.currencyCode}`}
          className={({ isActive, isPending }) =>
            isPending ? ` ${styles["pending"]}` : isActive ? `${styles["active"]}` : styles["dropdown__Account"]
          }
          aria-label="open account menu"
        >
          Details
          <FontAwesomeIcon icon={["fas", "gear"]} size={"2xs"} />
        </NavLink>
        <div className={styles["separator-5"]}></div>
        <NavLink
          to="/admin"
          className={({ isActive, isPending }) =>
            isPending ? ` ${styles["pending"]}` : isActive ? `${styles["active"]}` : styles["dropdown__Account"]
          }
          aria-label="open account menu"
        >
          Admin
          <FontAwesomeIcon icon={["fas", "caret-down"]} size={"2xs"} />
        </NavLink>
      </div>

      <button
        className={styles["button__Hamburger"]}
        title="hamburger-menu"
        aria-label="open mobile menu"
        onClick={() => navigate("admin")}
      >
        <FontAwesomeIcon icon={["fas", "bars"]} size={"lg"} />
      </button>
    </header>
  );
};
