import { FC } from "react";
import style from "./loader.module.css";
import { Container } from "..";

type SpinnerProps = {
  className?: string;
};

export const Loader: FC<SpinnerProps> = ({ className }) => {
  return (
    <Container className={style["Loader__wrapper"]}>
      <div className={`${style.ldsSpinner} ${className}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};
