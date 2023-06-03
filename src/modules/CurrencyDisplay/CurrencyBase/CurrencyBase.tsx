import { FC, memo, useEffect, useState } from "react";
import { CurrencySelect } from "../../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export const CurrencyBase: FC = memo(() => {
  const baseCurrency = useSelector((state: RootState) => state.currency.baseCurrency);
  const [selectValue, setSelectValue] = useState("");
  useEffect(() => {
    setSelectValue(baseCurrency);
  }, [baseCurrency]);
  return <CurrencySelect value={selectValue} label={"Please choose your base currency..."} />;
});
