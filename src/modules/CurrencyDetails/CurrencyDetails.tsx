import { FC, useContext } from "react";
import { CurrencyContext } from "../../contexts";
import { Card, Loader, ImageWithFallback, Container } from "../../components";
import { useParams } from "react-router-dom";
import styles from "./currencyDetails.module.css";

export const CurrencyDetails: FC = () => {
  const { currencyCode } = useParams();

  if (!currencyCode) {
    return <Loader />;
  }
  return (
    <Card title={"Details"}>
      <ImageWithFallback currencyCode={currencyCode} className={styles["flag__wrapper"]} />
    </Card>
  );
};
