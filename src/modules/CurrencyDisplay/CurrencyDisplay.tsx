import { FC } from "react";
import { CurrencyBase } from "../CurrencyBase";
import { CurrencyDisplayProps } from "../../types";
import { CurrencyHistory } from "./CurrencyHistory";
import { CurrencyLatest } from "./CurrencyLatest";

export const CurrencyDisplay: FC<CurrencyDisplayProps> = ({
  presentCurrency,
  fetchedCurrenciesHistory,
  currencyBaseHandler,
  baseCurrency,
  currencyNames,
}) => {
  return (
    <>
      <CurrencyBase
        currencyBaseHandler={currencyBaseHandler}
        presentCurrency={presentCurrency}
        currencyNames={currencyNames}
      />
      <CurrencyLatest presentCurrency={presentCurrency} baseCurrency={baseCurrency} />
      <CurrencyHistory
        fetchedCurrenciesHistory={fetchedCurrenciesHistory}
        presentCurrency={presentCurrency}
      />
    </>
  );
};
