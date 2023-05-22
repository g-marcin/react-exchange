import { FC, memo, useContext, useEffect, useState } from "react";
import { Container, CurrencySelect } from "../../../components";
import { CurrencyContext } from "../../../contexts";
import styles from "./currencyBase.module.css";

const CurrencyBaseMemo: FC = () => {
  const { currencyBaseHandler, baseCurrency } = useContext(CurrencyContext);
  const [selectValue, setSelectValue] = useState("");
  useEffect(() => {
    setSelectValue(baseCurrency);
  }, [baseCurrency]);
  return (
    <Container className={styles["display__Wrapper"]}>
      <CurrencySelect
        value={selectValue}
        selectHandler={currencyBaseHandler}
        label={"Please choose your base currency..."}
      />
    </Container>
  );
};
export const CurrencyBase = memo(CurrencyBaseMemo);
