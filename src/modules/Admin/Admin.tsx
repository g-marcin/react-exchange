import { FC, useEffect, useState, useContext } from "react";
import { Formik, Field, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container, Wrapper } from "../../components";
import { setDefaultCurrency, getDefaultCurrency } from "../../common";
import { CurrencyContext } from "../../contexts";
import styles from "./admin.module.css";
import { useNavigate } from "react-router-dom";
import { NewsletterForm } from "./NewsletterForm";
// import * as Yup from "yup";

// const YupSchema = Yup.object().shape({
//   firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
//   lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
// });

export const Admin: FC = () => {
  const [selectValue, setSelectValue] = useState("");
  const defaultCurrency = getDefaultCurrency();
  useEffect(() => {
    setSelectValue(defaultCurrency);
  }, [selectValue, defaultCurrency]);
  const { presentCurrency, fetchedCurrencyNames: currencyNames } = useContext(CurrencyContext);
  const navigate = useNavigate();
  return (
    <Wrapper className={styles["main-wrapper"]}>
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
                  .filter((currencyCode) => currencyCode !== presentCurrency?.currencyCode)
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
      <NewsletterForm />
    </Wrapper>
  );
};
