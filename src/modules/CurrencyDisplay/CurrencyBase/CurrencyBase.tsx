import { FC, memo, useContext } from "react";
import { CurrencyContext } from "../../../contexts";
import { Container } from "../../../components";

import styles from "./currencyBase.module.css";
import { CurrencySelect } from "../../../components/CurrencySelect";

const CurrencyBaseMemo: FC = () => {
  const { currencyBaseHandler } = useContext(CurrencyContext);
  return (
    <Container className={styles["display__Wrapper"]}>
      <CurrencySelect selectHandler={currencyBaseHandler} label={"Please choose your base currency..."} />
    </Container>
  );
};

export const CurrencyBase = memo(CurrencyBaseMemo);
