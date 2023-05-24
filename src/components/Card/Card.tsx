import { FC, PropsWithChildren } from "react";
import { Container, Wrapper } from "..";
import styles from "./card.module.css";

interface CardProps extends PropsWithChildren {
  title: string;
}

export const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <Wrapper className={styles["card__Wrapper"]}>
      <Container className={styles["container"]}>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
      </Container>
      {children}
    </Wrapper>
  );
};
