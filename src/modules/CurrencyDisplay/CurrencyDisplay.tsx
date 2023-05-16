import { FC } from "react";
import { Wrapper } from "../../components";
import { CurrencyBase } from "./CurrencyBase";
import { CurrencyLatest } from "./CurrencyLatest";
import { CurrencyHistory } from "./CurrencyHistory";
import { CurrencyDisplayProps } from "../../types";
import styles from "./currencyDisplay.module.css";

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
        currencyNames={currencyNames}
        presentCurrency={presentCurrency}
        currencyBaseHandler={currencyBaseHandler}
      />
      <CurrencyLatest presentCurrency={presentCurrency} baseCurrency={baseCurrency} />
      <CurrencyHistory fetchedCurrenciesHistory={fetchedCurrenciesHistory} presentCurrency={presentCurrency} />
    </Wrapper>
  );
};
