import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, ImageWithFallback, Loader, Wrapper } from "../../components";
import { ReturnButton } from "../../components/ReturnButton";
import { CurrencyContext } from "../../contexts";
import { useCountryDetails } from "../../hooks";
import styles from "./currencyDetails.module.css";

const CurrencyDetails: FC = () => {
  const { currencyCode } = useParams();
  const { fetchedCurrencyNames } = useContext(CurrencyContext);
  console.log(useCountryDetails(currencyCode || ""));

  if (!currencyCode) {
    return <Loader />;
  }
  return (
    <Card title={"Details"} className={styles["details"]}>
      <Wrapper className={styles["text-info"]}>
        <label>Currency Code:</label>
        <p>{currencyCode}</p>
        <label>Currency Name:</label>
        <p>{fetchedCurrencyNames[currencyCode]}</p>
        <label>Currency Flag:</label>
      </Wrapper>
      <ImageWithFallback currencyCode={currencyCode} className={styles["flag__wrapper"]} />
      <ReturnButton />
      {/* TODO insert chart component and 1day/5day/week/month/3month/6month/year/full form */}
    </Card>
  );
};

export default CurrencyDetails;
