import { FC } from "react";
import { Container, Wrapper } from "../../components";
import { CurrencyBaseProps } from "../../types";
import styles from "./currencyBase.module.css";

export const CurrencyBase: FC<CurrencyBaseProps> = ({ currencyBaseHandler, presentCurrency }) => {
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
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="PLN">PLN</option>
      </select>
    </Container>
  );
};
