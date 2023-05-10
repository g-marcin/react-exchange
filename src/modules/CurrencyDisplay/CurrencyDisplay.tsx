import { FC } from "react";
import { Wrapper } from "../../components";
import { CurrencyBase } from "../CurrencyBase";
import { CurrencyDisplayProps } from "../../types";
import styles from "./currencyDisplay.module.css";
import { CurrencyHistory } from "./CurrencyHistory";
import { CurrencyLatest } from "./CurrencyLatest";

export const CurrencyDisplay: FC<CurrencyDisplayProps> = ({
  presentCurrency,
  fetchedCurrenciesHistory,
  currencyBaseHandler,
  baseCurrency,
  currencyNames,
}) => {
  return (
    <Wrapper className={styles["display__Wrapper"]}>
      <CurrencyBase
        currencyBaseHandler={currencyBaseHandler}
        presentCurrency={presentCurrency}
        currencyNames={currencyNames}
      />
      <CurrencyLatest presentCurrency={presentCurrency} baseCurrency={baseCurrency} />
      <CurrencyHistory
        fetchedCurrenciesHistory={fetchedCurrenciesHistory}
        presentCurrency={presentCurrency}
      />
    </Wrapper>
  );
};
