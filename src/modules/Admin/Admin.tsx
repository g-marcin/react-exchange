import { FC } from "react";
import { Card, Container, CurrencySelect } from "../../components";
import { setDefaultCurrency } from "../../common";

export const Admin: FC = () => {
  return (
    <Card title={"Admin Panel"}>
      <Container>
        <CurrencySelect
          selectHandler={(targetValue) => {
            setDefaultCurrency(targetValue);
          }}
          label={"Please choose your default currency"}
        />
      </Container>
    </Card>
  );
};
