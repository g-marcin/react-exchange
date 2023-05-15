import { FC } from "react";
import { Wrapper } from "../../components";
import { CurrencyBase } from "./CurrencyBase";
import { CurrencyLatest } from "./CurrencyLatest";
import { CurrencyHistory } from "./CurrencyHistory";

import styles from "./currencyDisplay.module.css";

export const CurrencyDisplay: FC = () => {
  return (
    <Wrapper className={styles["display__Wrapper"]}>
      <CurrencyBase />
      <CurrencyLatest />
      <CurrencyHistory />
    </Wrapper>
  );
};
