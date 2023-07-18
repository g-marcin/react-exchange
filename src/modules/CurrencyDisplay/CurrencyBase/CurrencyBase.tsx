import { useMutation } from "@tanstack/react-query";
import { FC, memo, useContext, useEffect, useState } from "react";
import { queryClient } from "../../../common/ReactQuery";
import { CurrencySelect } from "../../../components";
import { CurrencyContext } from "../../../contexts";

export const CurrencyBase: FC = memo(() => {
  const { currencyBaseHandler, baseCurrency } = useContext(CurrencyContext);
  const [selectValue, setSelectValue] = useState("");
  const mutation = useMutation({
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["currencyLatest"] });
    },
  });
  useEffect(() => {
    setSelectValue(baseCurrency);
  }, [baseCurrency]);
  return (
    <CurrencySelect
      value={selectValue}
      selectHandler={currencyBaseHandler}
      label={"Please choose your base currency..."}
    />
  );
});
