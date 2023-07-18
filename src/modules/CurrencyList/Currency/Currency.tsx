import { useMutation } from "@tanstack/react-query";
import { FC, useContext } from "react";
import { queryClient } from "../../../common/ReactQuery";
import { Loader } from "../../../components";
import { ImageWithFallback } from "../../../components/ImageWithFallback";
import { CurrencyContext } from "../../../contexts";
import styles from "./currency.module.css";

export type CurrencyProps = {
  currencyCode: string;
  currencyRate: number;
};

export const Currency: FC<CurrencyProps> = ({ currencyCode, currencyRate }) => {
  const currencyContextObject = useContext(CurrencyContext);
  const mutation = useMutation({
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["currencyLatest"] });
    },
  });
  if (!currencyContextObject) {
    return <Loader />;
  }
  const currencyButtonHandler = currencyContextObject.currencyButtonHandler;
  const currencyNames = currencyContextObject.fetchedCurrencyNames;

  return (
    <button
      className={styles["currency__Button"]}
      onClick={() => {
        if (!currencyButtonHandler) {
          return;
        }
        currencyButtonHandler(currencyCode);
      }}
    >
      <ImageWithFallback
        currencyCode={currencyCode}
        className={styles["currency__Flag"]}
      />
      <span className={styles["currency__ItemSmall"]}>{`${currencyCode} `}</span>
      <span className={styles["currency__Name"]}>{currencyNames[`${currencyCode}`]}</span>
      <span className={styles["currency__ItemSmall"]}>{currencyRate.toFixed(2)}</span>
    </button>
  );
};
