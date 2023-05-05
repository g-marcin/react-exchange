import { FC, useState, useEffect } from "react";
import { httpClient } from "../../common";
import { AxiosResponse } from "axios";
import { ReactNode } from "react";
import { Wrapper } from "../../components/Wrapper";
import { currencyData } from "../../data";
import { CurrencyDisplay } from "../CurrencyDisplay";
import { CurrencyList } from "../CurrencyList";
import { CurrencyType } from "../../types";

type WrapperProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
};

export const CurrencyExchange: FC<WrapperProps> = ({ className }) => {
  const [presentCurrency, setPresentCurrency] = useState<CurrencyType | null>(null);
  const [fetchedCurrencies, setFetchedCurrencies] = useState([]);

  useEffect(() => {
    httpClient.get(`/2023-04-28..?from=USD`).then((response: AxiosResponse) => {
      setFetchedCurrencies(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Wrapper className={`main__Wrapper ${className}`}>
      <CurrencyDisplay presentCurrency={presentCurrency} />
      <CurrencyList currencyData={currencyData} setPresentCurrency={setPresentCurrency} />
    </Wrapper>
  );
};
