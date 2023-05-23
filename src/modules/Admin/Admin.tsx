import { FC, useEffect, useState, useContext } from "react";
import { Formik, Field, Form } from "formik";
import { Card, Container, Wrapper } from "../../components";
import { setDefaultCurrency, getDefaultCurrency } from "../../common";
import { CurrencyContext } from "../../contexts";
import styles from "./admin.module.css";
import { useNavigate } from "react-router-dom";

export const Admin: FC = () => {
  const [selectValue, setSelectValue] = useState("");
  const defaultCurrency = getDefaultCurrency();
  useEffect(() => {
    setSelectValue(defaultCurrency);
  }, [selectValue, defaultCurrency]);
  const { presentCurrency, fetchedCurrencyNames: currencyNames } = useContext(CurrencyContext);
  const navigate = useNavigate();
  return (
    <Card title={"Admin Panel"}>
      <Formik
        initialValues={{ name: "", email: "", defaultCurrency: "AUD" }}
        onSubmit={async (values) => {
          setDefaultCurrency(values.defaultCurrency);
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Wrapper>
            {/* <Field name="name" type="text" />
            <Field name="email" type="email" /> */}
            <label>
              Please choose your default currency
              <Field
                name="defaultCurrency"
                as="select"
                className={styles.select}
                label="Please choose your default currency"
              >
                {Object.keys(currencyNames)
                  .filter((currencyCode) => currencyCode !== presentCurrency?.currencyCode)
                  .map((currencyCode) => {
                    return (
                      <option key={currencyCode} value={currencyCode}>
                        {`${currencyCode} - ${currencyNames[currencyCode]}`}
                      </option>
                    );
                  })}
              </Field>
            </label>
            <button type="submit">Save</button>
            <button
              type="submit"
              onClick={() => {
                setTimeout(() => {
                  navigate("/");
                }, 1);
              }}
            >
              Save & return
            </button>
          </Wrapper>
        </Form>
      </Formik>
    </Card>
  );
};
