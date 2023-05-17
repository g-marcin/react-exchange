import { FC, memo, useContext } from "react";
import { CurrencyContext } from "../../../contexts";
import { Container, Loader } from "../../../components";

import styles from "./currencyBase.module.css";

const CurrencyBaseMemo: FC = () => {
  const contextObject = useContext(CurrencyContext);
  if (!contextObject) {
    return <Loader />;
  }
  const { currencyBaseHandler, presentCurrency, fetchedCurrencyNames: currencyNames } = contextObject;

  return (
    <Container className={styles["display__Wrapper"]}>
      <p className={styles["base__Label"]}> Please choose your base currency... </p>
      <select
        className={styles["base__Select"]}
        name="baseCurrency"
        id="baseCurrency"
        onChange={(e) => {
          currencyBaseHandler(e.target.value);
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

export const CurrencyBase = memo(CurrencyBaseMemo);
