import { FC } from "react";
import { Wrapper } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { CurrencyBase } from "./CurrencyBase";
import { CurrencyLatest } from "./CurrencyLatest";
import { CurrencyHistory } from "./CurrencyHistory";
import styles from "./currencyDisplay.module.css";

export const CurrencyDisplay: FC = () => {
  const presentCurrency = useSelector((state: RootState) => state.currency.presentCurrency);

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
