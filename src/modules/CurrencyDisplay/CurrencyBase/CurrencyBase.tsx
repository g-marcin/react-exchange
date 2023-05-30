import { FC, memo, useContext, useEffect, useState } from "react";
import { CurrencySelect } from "../../../components";
import { CurrencyContext } from "../../../contexts";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const CurrencyBase: FC = memo(() => {
  const { currencyBaseHandler } = useContext(CurrencyContext);
  const baseCurrency = useSelector((state: RootState) => state.currency.baseCurrency);
  const [selectValue, setSelectValue] = useState("");
  useEffect(() => {
    setSelectValue(baseCurrency);
  }, [baseCurrency]);
  return <CurrencySelect value={selectValue} label={"Please choose your base currency..."} />;
});
