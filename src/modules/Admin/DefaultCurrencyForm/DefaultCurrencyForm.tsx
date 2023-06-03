import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setDefaultCurrency, getDefaultCurrency } from "../../../common";
import { Container, Wrapper, Card, Loader } from "../../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { useGetCurrencyNamesQuery } from "../../../redux";

import styles from "./defaultCurrencyForm.module.css";

export const DefaultCurrencyForm: FC = () => {
  const [selectValue, setSelectValue] = useState<string | null>("");
  const defaultCurrency = getDefaultCurrency();
  useEffect(() => {
    setSelectValue(defaultCurrency);
  }, [selectValue, defaultCurrency]);

  const presentCurrency = useSelector((state: RootState) => state.currency.presentCurrency);
  const { data: currencyNames, isLoading } = useGetCurrencyNamesQuery();
  const navigate = useNavigate();
  if (isLoading || !currencyNames) {
    return <Loader />;
  }

  return (
    <Card title={"Admin Panel"}>
      <Formik
        initialValues={{ name: "", email: "", defaultCurrency: "AUD" }}
        onSubmit={async (values) => {
          setDefaultCurrency(values.defaultCurrency);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className={styles["wrapper-form"]}>
          <Wrapper className={styles["wrapper-field"]}>
            <label>Please choose default currency:</label>
            <Field
              name="defaultCurrency"
              as="select"
              className={`${styles["select"]} ${styles["field"]}}`}
              label="Please choose your default currency"
            >
              {Object.keys(currencyNames)
                .filter((currencyCode) => currencyCode !== presentCurrency)
                .map((currencyCode) => {
                  return (
                    <option key={currencyCode} value={currencyCode}>
                      {`${currencyCode} - ${currencyNames[currencyCode]}`}
                    </option>
                  );
                })}
            </Field>
          </Wrapper>
          <Container className={styles["button-group"]}>
            <button type="submit" className={styles["button-black"]}>
              Save
              <FontAwesomeIcon icon={["fas", "floppy-disk"]} size={"lg"} />
            </button>
            <button
              type="submit"
              onClick={() => {
                setTimeout(() => {
                  navigate("/");
                }, 1);
              }}
              className={styles["button-black"]}
            >
              Save & Return
              <FontAwesomeIcon icon={["fas", "share-from-square"]} size={"lg"} />
            </button>
          </Container>
        </Form>
      </Formik>
    </Card>
  );
};
