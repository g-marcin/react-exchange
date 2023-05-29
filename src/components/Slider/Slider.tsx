import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Container } from "..";
import { CurrencyContext } from "../../contexts";
import styles from "./slider.module.css";

type SlidingMenuProps = {
  isOpen:boolean, 
  closeMenu: ()=>void
}

export const Slider: FC<SlidingMenuProps> = ({ isOpen, closeMenu }) => {
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
            <NavLink to="/" onClick={closeMenu}>
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


