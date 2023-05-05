import { FC } from "react";
import { ReactNode } from "react";
import styles from "./wrapper.module.css";

type WrapperProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
  onClick?: () => void;
};

export const Wrapper: FC<WrapperProps> = ({ children, className }, { ...delegated }) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...delegated}>
      {children}
    </div>
  );
};
