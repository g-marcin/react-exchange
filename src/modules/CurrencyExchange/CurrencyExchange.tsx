import { FC, PropsWithChildren, useEffect } from "react";
import { Card } from "../../components";
import { CurrencyDisplay, CurrencyList } from "..";
import { setDefaultCurrency, getDefaultCurrency } from "../../common";

export interface CurrencyExchangeProps extends PropsWithChildren {
  className?: string;
}
export const CurrencyExchange: FC<CurrencyExchangeProps> = () => {
  useEffect(() => {
    async () => {
      const defaultCurrency = await getDefaultCurrency();
      if (!defaultCurrency) {
        setDefaultCurrency("EUR");
      }
    };
  }, []);
  return (
    <Card title={"Currency Exchange"}>
      <CurrencyDisplay />
      <CurrencyList />
    </Card>
  );
};
