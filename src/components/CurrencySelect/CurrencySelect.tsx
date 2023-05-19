import { FC, useContext } from "react";
import { CurrencyContext } from "../../contexts";
import styles from "./currencySelect.module.css";
import { Container } from "..";
import { CurrencyBaseHandlerType } from "../../types";

type CurrencySelectProps = {
  label: string;
  selectHandler: CurrencyBaseHandlerType | (() => void);
};

export const CurrencySelect: FC<CurrencySelectProps> = ({ label, selectHandler }) => {
  const { presentCurrency, fetchedCurrencyNames: currencyNames, baseCurrency } = useContext(CurrencyContext);
  return (
    <Container>
      <p className={styles.label}> {label}:</p>
      <select
        className={styles.select}
        name="baseCurrency"
        id="baseCurrency"
        value={baseCurrency}
        onChange={(e) => {
          selectHandler(e.target.value);
        }}
      >
        {Object.keys(currencyNames)
          .filter((currencyCode) => currencyCode !== presentCurrency?.currencyCode)
          .map((currencyCode) => {
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
