import { FC, memo, useContext, useEffect, useState } from "react";
import { CurrencySelect } from "../../../components";
import { CurrencyContext } from "../../../contexts";

export const CurrencyBase: FC = memo(() => {
  const { currencyBaseHandler, baseCurrency } = useContext(CurrencyContext);
  const [selectValue, setSelectValue] = useState("");
  useEffect(() => {
    setSelectValue(baseCurrency);
  }, [baseCurrency]);
  return (
    <CurrencySelect value={selectValue} selectHandler={currencyBaseHandler} label={"Please choose your base currency..."} />
  );
});
