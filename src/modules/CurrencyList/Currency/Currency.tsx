import { FC } from "react";

import styles from "./currency.module.css";
import { CurrencyProps } from "../../../types";

export const Currency: FC<CurrencyProps> = ({
  currencyCode,
  currencyRate,
  currencyNames,
  currencyButtonHandler,
}) => {
  return (
    <button
      className={styles["currency__Button"]}
      onClick={() => {
        currencyButtonHandler(currencyCode);
      }}
    >
      {currencyCode !== "EUR" && (
        <img
          src={`https://flagsapi.com/${currencyCode.slice(0, 2)}/flat/64.png`}
          style={{ flex: "1" }}
        />
      )}
      {currencyCode === "EUR" && (
        <img src={"../../assets/eu.png"} alt="x" style={{ alignSelf: "center", flex: "1" }} />
      )}
      <span style={{ alignSelf: "center", padding: "5px", flex: "2" }}>{`${currencyCode} `}</span>

      <span style={{ alignSelf: "center", padding: "5px", flex: "5" }}>
        {currencyNames && currencyNames[`${currencyCode}`]}
      </span>
      <span style={{ alignSelf: "center", padding: "5px", flex: "2" }}>
        {currencyRate.toFixed(2)}
      </span>
    </button>
  );
};
