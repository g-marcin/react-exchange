import { FC } from "react";
import { CurrencyType } from "../../types";
import { Wrapper } from "../../components/Wrapper";
import { Currency } from "./Currency";

type CurrencyListProps = {
  currencyData: CurrencyType[];
  currencyButtonHandler: (value: CurrencyType) => void;
};

export const CurrencyList: FC<CurrencyListProps> = ({ currencyData, currencyButtonHandler }) => {
  return (
    <Wrapper>
      {currencyData.map((currency, index) => {
        return (
          <Currency currency={currency} currencyButtonHandler={currencyButtonHandler} key={index} />
        );
      })}
    </Wrapper>
  );
};
