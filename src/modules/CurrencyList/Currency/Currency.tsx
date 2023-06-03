import { FC } from "react";
import { useDispatch } from "react-redux";
import { setPresentCurrency } from "../../../redux";
import { Loader, ImageWithFallback } from "../../../components";
import styles from "./currency.module.css";
import { useGetCurrencyNamesQuery } from "../../../redux";

export type CurrencyProps = {
  currencyCode: string;
  currencyRate: number;
};
export const Currency: FC<CurrencyProps> = ({ currencyCode, currencyRate }) => {
  const dispatch = useDispatch();
  const { data: currencyNames, isLoading } = useGetCurrencyNamesQuery();
  if (isLoading || !currencyNames) {
    return <Loader />;
  }
  const handlePresentCurrencyChange = (currencyCode: string) => {
    dispatch(setPresentCurrency(currencyCode));
  };
  return (
    <button
      className={styles["currency__Button"]}
      onClick={() => {
        handlePresentCurrencyChange(currencyCode);
      }}
    >
      <ImageWithFallback currencyCode={currencyCode} className={styles["currency__Flag"]} />
      <span className={styles["currency__ItemSmall"]}>{`${currencyCode} `}</span>
      <span className={styles["currency__Name"]}>{currencyNames[`${currencyCode}`]}</span>
      <span className={styles["currency__ItemSmall"]}>{currencyRate.toFixed(2)}</span>
    </button>
  );
};
