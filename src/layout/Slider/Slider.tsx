import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { ThemeContext } from "../../contexts";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Container } from "../../components";
import styles from "./slider.module.css";

type SliderProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

export const Slider: FC<SliderProps> = ({ isOpen, closeMenu }) => {
  const presentCurrency = useSelector((state: RootState) => state.currency.presentCurrency);

  const { isDark, themeButtonHandler } = useContext(ThemeContext);

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
            <NavLink to={presentCurrency ? `/details/${presentCurrency}` : "/details"} onClick={closeMenu}>
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
