import { FC } from "react";
import { Wrapper } from "../../components";
import { CurrencyDisplayProps } from "../../types";
import styles from "./currencyDisplay.module.css";

export const CurrencyDisplay: FC<CurrencyDisplayProps> = ({
  presentCurrency,
  fetchedCurrenciesHistory,
}) => {
  return (
    <Wrapper className={styles["display__Wrapper"]}>
      <p style={{ fontSize: "24px", margin: "auto" }}>
        {presentCurrency
          ? `Latest ${presentCurrency?.currencyCode} to USD rate: ${presentCurrency?.rate}`
          : `Please choose your currency...`}
      </p>
      <p>
        {fetchedCurrenciesHistory &&
          Object.entries(fetchedCurrenciesHistory?.rates)
            .map(([date, currencyRates]) => {
              return (
                <div className={styles["display__History"]}>
                  <span>{date}</span>
                  <span>
                    {currencyRates
                      ? JSON.stringify(currencyRates[presentCurrency?.currencyCode])
                      : ""}
                  </span>
                </div>
              );
            })
            .reverse()}
      </p>
    </Wrapper>
  );
};
