import { FC } from "react";
import { useParams } from "react-router-dom";
import { Card, ImageWithFallback, Loader, Wrapper } from "../../components";
import { ReturnButton } from "../../components/ReturnButton";
import { useCountryDetails } from "../../hooks";
import styles from "./currencyDetails.module.css";
import { useGetCurrencyNamesQuery } from "../../redux";

const CurrencyDetails: FC = () => {
  const { currencyCode } = useParams();
  const countryDetails = useCountryDetails(currencyCode || "");
  const { data: currencyNames, isLoading } = useGetCurrencyNamesQuery();
  if (isLoading || !currencyNames) {
    return <Loader />;
  }

  if (!currencyCode) {
    return <Loader />;
  }
  return (
    <Card title={"Details"} className={styles["details"]}>
      <Wrapper className={styles["text-info"]}>
        <label>Currency Code:</label>
        <p>{currencyCode}</p>
        <label>Currency Name:</label>
        <p>{currencyNames[currencyCode]}</p>
        <label>Currency Flag:</label>
        {JSON.stringify(countryDetails)}
      </Wrapper>
      <ImageWithFallback currencyCode={currencyCode} className={styles["flag__wrapper"]} />

      <ReturnButton />
      {/* TODO insert chart component and 1day/5day/week/month/3month/6month/year/full form */}
    </Card>
  );
};

export default CurrencyDetails;
