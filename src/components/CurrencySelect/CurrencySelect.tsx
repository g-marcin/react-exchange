import { FC, useContext } from "react";
import { Container } from "..";
import { CurrencyContext } from "../../contexts";
import { CurrencyBaseHandlerType } from "../../types";
import styles from "./currencySelect.module.css";

type CurrencySelectProps = {
  label: string;
  value: string;
  selectHandler: CurrencyBaseHandlerType | (() => void);
};

export const CurrencySelect: FC<CurrencySelectProps> = ({ label, value, selectHandler }) => {
  const { presentCurrency, fetchedCurrencyNames: currencyNames } = useContext(CurrencyContext);

  return (
    <Container>
      <p className={styles.label}> {label}:</p>
      <select
        className={styles.select}
        name="baseCurrency"
        id="baseCurrency"
        value={value}
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
