import { FC } from "react";
import { Wrapper } from "../../components";
import { CurrencyBaseProps } from "../../types";
import styles from "./currencyBase.module.css";

export const CurrencyBase: FC<CurrencyBaseProps> = ({ currencyBaseHandler }) => {
  return (
    <Wrapper className={styles["display__Wrapper"]}>
      <p style={{ fontSize: "24px", margin: "auto" }}> Please choose your base currency... </p>
      <select name="" id="" onChange={(e) => currencyBaseHandler(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="PLN">PLN</option>
      </select>
    </Wrapper>
  );
};
