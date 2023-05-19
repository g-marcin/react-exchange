import { FC } from "react";
import { Wrapper } from "../components";
import { Outlet } from "react-router-dom";
import { Header, Footer } from ".";
import styles from "./layout.module.css";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Wrapper className={styles["Outlet__wrapper"]}>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};
