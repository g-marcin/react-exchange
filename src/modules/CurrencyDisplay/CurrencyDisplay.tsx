import { FC } from "react";
import { Wrapper } from "../../components/Wrapper";
import { CurrencyType } from "../../types";

type CurrencyDisplayProps = {
  presentCurrency: CurrencyType | null;
};

export const CurrencyDisplay: FC<CurrencyDisplayProps> = ({ presentCurrency }) => {
  return (
    <Wrapper>
      <p>{`present currency is ${JSON.stringify(presentCurrency)}`}</p>
    </Wrapper>
  );
};
