import { FC, PropsWithChildren } from "react";
import { Container, Wrapper } from "..";
import styles from "./card.module.css";

interface CardProps extends PropsWithChildren {
  title: string;
  className?: string;
}

export const Card: FC<CardProps> = ({ title, children, className = "" }) => {
  return (
    <Wrapper className={`${styles["card__Wrapper"]} ${className}`}>
      <Container className={styles["container"]}>
        <h1 className={styles["card__Header"]}>{title}</h1>
      </Container>
      {children}
    </Wrapper>
  );
};
