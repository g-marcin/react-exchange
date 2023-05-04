import { FC } from "react";
import { CurrencyType } from "../../types";
import { Wrapper } from "../../components/Wrapper";
import { Currency } from "./Currency";

type CurrencyListProps = {
  currencyData: CurrencyType[];
  setPresentCurrency: React.Dispatch<React.SetStateAction<null | CurrencyType>>;
};

export const CurrencyList: FC<CurrencyListProps> = ({ currencyData, setPresentCurrency }) => {
  return (
    <Wrapper>
      {currencyData.map((currency) => {
        return <Currency currency={currency} setPresentCurrency={setPresentCurrency} />;
      })}
    </Wrapper>
  );
};
