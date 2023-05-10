import { FC } from "react";
import { Container } from "../../components";
import { CurrencyBaseProps } from "../../types";
import styles from "./currencyBase.module.css";

export const CurrencyBase: FC<CurrencyBaseProps> = ({
  currencyBaseHandler,
  presentCurrency,
  currencyNames,
}) => {
  return (
    <Container className={styles["display__Wrapper"]}>
      <p style={{ fontSize: "24px", margin: "auto" }}> Please choose your base currency... </p>
      <select
        className={styles["base__Select"]}
        name="base"
        id="base"
        onChange={(e) => {
          const baseCurrency = e.target.value;
          if (presentCurrency.currencyCode === baseCurrency) {
            return;
          }
          currencyBaseHandler(baseCurrency, presentCurrency);
        }}
        style={{ height: "50px" }}
      >
        {currencyNames &&
          Object.keys(currencyNames).map((currencyCode) => {
            return (
              <option key={currencyCode} value={currencyCode}>
                {`${currencyCode} - ${currencyNames[currencyCode]}`}
              </option>
            );
          })}
      </select>
    </Container>
  );
};
