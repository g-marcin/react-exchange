import { FC, useContext } from "react";
import { useDispatch } from "react-redux";
import { ImageWithFallback } from "../../../components/ImageWithFallback";
import { CurrencyContext } from "../../../contexts";
import { Loader } from "../../../components";
import styles from "./currency.module.css";
import { setPresentCurrency } from "../../../store";

export type CurrencyProps = {
  currencyCode: string;
  currencyRate: number;
};

export const Currency: FC<CurrencyProps> = ({ currencyCode, currencyRate }) => {
  const dispatch = useDispatch();
  const currencyContextObject = useContext(CurrencyContext);
  if (!currencyContextObject) {
    return <Loader />;
  }
  const currencyButtonHandler = currencyContextObject.currencyButtonHandler;
  const currencyNames = currencyContextObject.fetchedCurrencyNames;

  const handlePresentCurrencyChange = (currencyCode: string) => {
    dispatch(setPresentCurrency(currencyCode));
  };

  return (
    <button
      className={styles["currency__Button"]}
      onClick={() => {
        if (!currencyButtonHandler) {
          return;
        }
        currencyButtonHandler(currencyCode);
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
