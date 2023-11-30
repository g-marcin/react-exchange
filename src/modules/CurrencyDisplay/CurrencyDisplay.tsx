import { FC, useContext } from "react";
import { Wrapper } from "../../components";
import { CurrencyContext } from "../../contexts";
import { CurrencyBase } from "./CurrencyBase";
import { CurrencyLatest } from "./CurrencyLatest";
import { CurrencyHistory } from "./CurrencyHistory";
import styles from "./currencyDisplay.module.css";

export const CurrencyDisplay: FC = () => {
  const { presentCurrency } = useContext(CurrencyContext);
  return (
    <Wrapper className={styles["display__Wrapper"]}>
      {presentCurrency ? (
        <>
          <CurrencyLatest />
          <CurrencyHistory />
        </>
      ) : null}
      <CurrencyBase />
    </Wrapper>
  );
};
