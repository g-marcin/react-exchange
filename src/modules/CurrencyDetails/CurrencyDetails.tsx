import { FC, useContext } from "react";
import { CurrencyContext } from "../../contexts";
import { Card, Loader, ImageWithFallback } from "../../components";
import { useParams } from "react-router-dom";
import styles from "./currencyDetails.module.css";
import { ReturnButton } from "../../components/ReturnButton";
import { ReactComponent as GearSvg } from "../../assets/img/gearsvg.svg";
import { useCountryDetails } from "../../hooks";

export const CurrencyDetails: FC = () => {
  const { currencyCode } = useParams();
  const { fetchedCurrencyNames } = useContext(CurrencyContext);
  console.log(useCountryDetails(currencyCode || ""));

  if (!currencyCode) {
    return <Loader />;
  }
  return (
    <Card title={"Details"} className={styles["details"]}>
      <GearSvg className={styles["gearsvg"]} />
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
