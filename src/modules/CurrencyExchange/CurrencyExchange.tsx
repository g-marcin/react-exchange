import { FC, PropsWithChildren } from "react";
import { Card } from "../../components";
import { CurrencyDisplay, CurrencyList } from "..";

export interface CurrencyExchangeProps extends PropsWithChildren {
  className?: string;
}
export const CurrencyExchange: FC<CurrencyExchangeProps> = () => {
  return (
    <Card title={"Currency Exchange"}>
      <CurrencyDisplay />
      <CurrencyList />
    </Card>
  );
};
