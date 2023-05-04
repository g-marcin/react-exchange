import { FC } from "react";
import { ReactNode } from "react";
import styles from "./wrapper.module.css";

type WrapperProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
};

export const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};
