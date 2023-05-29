import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, ImageWithFallback, Loader } from "../../components";
import { ReturnButton } from "../../components/ReturnButton";
import { CurrencyContext } from "../../contexts";
import { useCountryDetails } from "../../hooks";
import styles from "./currencyDetails.module.css";

export const CurrencyDetails: FC = () => {
  const { currencyCode } = useParams();
  const { fetchedCurrencyNames } = useContext(CurrencyContext);
  console.log(useCountryDetails(currencyCode || ""));

  if (!currencyCode) {
    return <Loader />;
  }
  return (
    <Card title={"Details"} className={styles["details"]}>
      <label>Currency Code:</label>
      <p>{currencyCode}</p>
      <label>Currency Name:</label>
      <p>{fetchedCurrencyNames[currencyCode]}</p>
      <label>Currency Flag:</label>
      <ImageWithFallback currencyCode={currencyCode} className={styles["flag__wrapper"]} />
      <ReturnButton />
      {/* TODO insert chart component and 1day/5day/week/month/3month/6month/year/full form */}
    </Card>
  );
};
