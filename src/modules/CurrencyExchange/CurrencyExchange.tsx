import { FC, useState } from "react";
import { ReactNode } from "react";
import { Wrapper } from "../../components/Wrapper";
import { currencyData } from "../../data";
import { CurrencyDisplay } from "../CurrencyDisplay";
import { CurrencyList } from "../CurrencyList";
import { CurrencyType } from "../../types";
import { Library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

type WrapperProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
};

export const CurrencyExchange: FC<WrapperProps> = ({ className }) => {
  const [presentCurrency, setPresentCurrency] = useState<CurrencyType | null>(null);
  return (
    <Wrapper className={className}>
      <CurrencyDisplay presentCurrency={presentCurrency} />
      <CurrencyList currencyData={currencyData} setPresentCurrency={setPresentCurrency} />
    </Wrapper>
  );
};
