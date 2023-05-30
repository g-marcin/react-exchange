import { FC, useContext } from "react";
import { Container } from "..";
import { CurrencyContext } from "../../contexts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { CurrencyBaseHandlerType } from "../../types";
import { setBaseCurrency } from "../../store";
import styles from "./currencySelect.module.css";

type CurrencySelectProps = {
  label: string;
  value: string;
};

export const CurrencySelect: FC<CurrencySelectProps> = ({ label, value }) => {
  const { fetchedCurrencyNames: currencyNames } = useContext(CurrencyContext);
  const presentCurrency = useSelector((state: RootState) => state.currency.presentCurrency);
  const dispatch = useDispatch();

  const handleBaseCurrencyChange = (currencyCode: string) => {
    dispatch(setBaseCurrency(currencyCode));
  };
  return (
    <Container className={styles["container"]}>
      <label className={styles.label}> {label}:</label>
      <select
        className={styles.select}
        name="baseCurrency"
        id="baseCurrency"
        value={value}
        onChange={(e) => {
          handleBaseCurrencyChange(e.target.value);
        }}
      >
        {Object.keys(currencyNames)
          .filter((currencyCode) => currencyCode !== presentCurrency)
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
