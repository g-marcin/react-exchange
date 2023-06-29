import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Loader } from "..";
import { RootState } from "../../redux/store";
import { setBaseCurrency } from "../../redux/currencySlice";
import styles from "./currencySelect.module.css";
import { useGetCurrencyNamesQuery } from "../../redux";

type CurrencySelectProps = {
  label: string;
  value: string;
};

export const CurrencySelect: FC<CurrencySelectProps> = ({ label, value }) => {
  const dispatch = useDispatch();
  const presentCurrency = useSelector((state: RootState) => state.currency.presentCurrency);
  //createSelector
  const { data: currencyNames, isLoading } = useGetCurrencyNamesQuery();
  if (isLoading || !currencyNames) {
    return <Loader />;
  }
  return (
    <Container className={styles["container"]}>
      <label className={styles.label}> {label}:</label>
      <select
        className={styles.select}
        name="baseCurrency"
        id="baseCurrency"
        value={value}
        onChange={(e) => {
          dispatch(setBaseCurrency(e.target.value));
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
