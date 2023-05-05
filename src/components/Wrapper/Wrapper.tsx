import { FC, PropsWithChildren } from "react";

import styles from "./wrapper.module.css";

interface WrapperProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

export const Wrapper: FC<WrapperProps> = ({ className, children }, { ...delegated }) => {
  return (
    <div className={`${styles["wrapper-case"]} ${className}`} {...delegated}>
      {children}
    </div>
  );
};
