import { FC } from "react";
import { Card, Container, CurrencySelect, ImageWithFallback, Loader, Wrapper } from "..";
import { CountryCodeSelect } from "../CountryCodeSelect";
import { ReturnButton } from "../ReturnButton";
import styles from "./componentDisplay.module.css";

export const ComponentsDisplay: FC = () => {
  return (
    <Wrapper className="main__Wrapper">
      <h3>Card:</h3>
      <Card title="this is a Card" />
      <h3>Container:</h3>
      <Container />
      <h3>CountryCodeSelect:</h3>
      <CountryCodeSelect />
      <h3>CurrencySelect:</h3>
      <CurrencySelect label="this is CurrencySelect" value="this is value" />
      <h3>ImageWithFallback:</h3>
      <ImageWithFallback currencyCode="USD" className={styles.image} />
      <h3>Loader:</h3>
      <Loader />
      <h3>ReturnButton:</h3>
      <ReturnButton />
      <h3>Wrapper:</h3>
      <Wrapper>This is a wrapper</Wrapper>
    </Wrapper>
  );
};
