import { FC } from "react";
import { WrapperProps } from "../../types";
import styles from "./wrapper.module.css";

export const Wrapper: FC<WrapperProps> = ({ className, children }, { ...delegated }) => {
  return (
    <div className={`${styles["wrapper-case"]} ${className}`} {...delegated}>
      {children}
    </div>
  );
};
