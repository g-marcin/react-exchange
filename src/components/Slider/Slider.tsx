import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CurrencyContext } from "../../contexts";
import { Container } from "..";
import styles from "./slider.module.css";

const SlidingMenu = ({ isOpen, closeMenu }) => {
  const { presentCurrency, themeButtonHandler, isDark } = useContext(CurrencyContext);

  return (
    <CSSTransition in={isOpen} timeout={300} classNames={styles["menu-transition"]} unmountOnExit>
      <div className={styles["sliding-menu"]}>
        <ul>
          <li>
            <Container className={styles["space-between"]}>
              <button onClick={themeButtonHandler}>
                {isDark ? (
                  <FontAwesomeIcon icon={"lightbulb"} size={"2xl"} />
                ) : (
                  <FontAwesomeIcon icon={["far", "moon"]} size={"2xl"} />
                )}
              </button>

              <button onClick={closeMenu}>
                <FontAwesomeIcon icon={["fas", "bars"]} size={"lg"} />
              </button>
            </Container>
          </li>
          <li>
            <Container className={styles["end"]}></Container>
          </li>
          <li>
            <NavLink to="/" activeClassName="active" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/details/${presentCurrency?.currencyCode}`} onClick={closeMenu}>
              Details
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" onClick={closeMenu}>
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </CSSTransition>
  );
};

export default SlidingMenu;
