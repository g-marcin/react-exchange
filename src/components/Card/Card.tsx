import { FC, PropsWithChildren } from "react";
import { Wrapper } from "..";
import styles from "./card.module.css";

interface CardProps extends PropsWithChildren {
  title: string;
}

export const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <Wrapper className={styles["card__Wrapper"]}>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {children}
    </Wrapper>
  );
};
