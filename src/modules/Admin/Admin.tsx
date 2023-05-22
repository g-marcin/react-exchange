import { FC, useEffect, useState } from "react";
import { Card, Container, CurrencySelect } from "../../components";
import { setDefaultCurrency, getDefaultCurrency } from "../../common";

export const Admin: FC = () => {
  const [selectValue, setSelectValue] = useState("");
  const defaultCurrency = getDefaultCurrency();
  useEffect(() => {
    setSelectValue(defaultCurrency);
  }, []);
  return (
    <Card title={"Admin Panel"}>
      <Container>
        <CurrencySelect
          value={selectValue}
          selectHandler={(targetValue) => {
            setDefaultCurrency(targetValue);
            setSelectValue(targetValue);
          }}
          label={"Please choose your default currency"}
        />
      </Container>
    </Card>
  );
};
