import { FC, useContext } from "react";
import { CurrencyContext } from "../../contexts";
import { Card, Loader, ImageWithFallback } from "../../components";
import { useParams } from "react-router-dom";
import styles from "./currencyDetails.module.css";
import { ReturnButton } from "../../components/ReturnButton";

export const CurrencyDetails: FC = () => {
  const { currencyCode } = useParams();
  const { fetchedCurrencyNames } = useContext(CurrencyContext);

  if (!currencyCode) {
    return <Loader />;
  }
  return (
    <Card title={"Details"}>
      <label>Currency Code:</label>
      <p>{currencyCode}</p>
      <label>Currency Name:</label>
      <p>{fetchedCurrencyNames[currencyCode]}</p>
      <label>Currency Flag:</label>
      <ImageWithFallback currencyCode={currencyCode} className={styles["flag__wrapper"]} />
      <ReturnButton />
    </Card>
  );
};
