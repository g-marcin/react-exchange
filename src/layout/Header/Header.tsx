import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Slider } from "../Slider";
import { CurrencyContext, ThemeContext } from "../../contexts";
import styles from "./header.module.css";

export const Header: FC = () => {
  const { presentCurrency } = useContext(CurrencyContext);
  const { isDark, themeButtonHandler } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
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
            to={presentCurrency?.currencyCode ? `/details/${presentCurrency.currencyCode}` : "/details"}
            className={({ isActive, isPending }) =>
              isPending ? ` ${styles["pending"]}` : isActive ? `${styles["active"]}` : styles["dropdown__Account"]
            }
            aria-label="open account menu"
          >
            Details
            <FontAwesomeIcon icon={["fas", "caret-down"]} size={"2xs"} />
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
            <FontAwesomeIcon icon={["fas", "gear"]} size={"2xs"} />
          </NavLink>
          <div className={styles["separator-5"]}></div>
          <button
            onClick={() => {
              themeButtonHandler();
            }}
          >
            <p className={styles["dropdown__Account"]}>
              {isDark ? (
                <>
                  <span>Light</span>
                  <FontAwesomeIcon icon={"lightbulb"} size={"lg"} />
                </>
              ) : (
                <>
                  <span>Dark</span>
                  <FontAwesomeIcon icon={["far", "moon"]} size={"lg"} />
                </>
              )}
            </p>
          </button>
        </div>
        <button
          className={`${styles["button__Hamburger"]}`}
          title="hamburger-menu"
          aria-label="open mobile menu"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={["fas", "bars"]} size={"lg"} />
        </button>
      </header>
      <Slider isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
};
