import { FC } from "react";
import { Wrapper } from "../../components";
import { CurrencyBase } from "../CurrencyBase";
import { CurrencyDisplayProps } from "../../types";

import styles from "./currencyDisplay.module.css";

export const CurrencyDisplay: FC<CurrencyDisplayProps> = ({
  presentCurrency,
  fetchedCurrenciesHistory,
  currencyBaseHandler,
  baseCurrency,
}) => {
  return (
    <Wrapper className={styles["display__Wrapper"]}>
      <p style={{ fontSize: "24px", margin: "auto" }}>
        {presentCurrency
          ? `Latest ${presentCurrency?.currencyCode} to ${baseCurrency} rate: ${presentCurrency?.rate}`
          : `Please choose currency to compare...`}
      </p>
      <Wrapper>
        {fetchedCurrenciesHistory &&
          Object.entries(fetchedCurrenciesHistory.rates)
            .map(([date, currencyRates], index) => {
              return (
                <div className={styles["display__History"]} key={index}>
                  <span>{date}</span>
                  <span>
                    {presentCurrency
                      ? JSON.stringify(currencyRates[presentCurrency.currencyCode])
                      : ""}
                  </span>
                </div>
              );
            })
            .reverse()}
      </Wrapper>
      <CurrencyBase currencyBaseHandler={currencyBaseHandler} />
    </Wrapper>
  );
};
