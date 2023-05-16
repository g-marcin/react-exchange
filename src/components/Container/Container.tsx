import { FC, PropsWithChildren } from "react";

import styles from "./container.module.css";

interface ContainerProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

export const Container: FC<ContainerProps> = ({ className, children }, { ...delegated }) => {
  return (
    <div className={`${styles["container-case"]} ${className}`} {...delegated}>
      {children}
    </div>
  );
};
