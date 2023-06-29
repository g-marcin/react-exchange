import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CountryCodeSelect } from "../../../components/CountryCodeSelect";
import { Card, Container, Wrapper } from "../../../components";
import countryPhoneCodes from "../../../assets/json/countryPhoneCodes.json";
import styles from "./newsletterForm.module.css";
import { format } from "date-fns";
import { validateName, validateBirthDate, validateEmail, validatePhoneNumber } from "./formValidators";

export const NewsletterForm: FC = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    if (!window.confirm("Would you like to reset form data?")) {
      throw new Error("Cancel reset");
    }
  };
  const handleSubmit = async (values: FormikValues) => {
    alert(JSON.stringify(values, null, 2));
  };
  const options = countryPhoneCodes.map((countryData) => {
    return { value: countryData.code, label: `+${countryData.code} ${countryData.country}` };
  });

  return (
    <Card title={"Join the newsletter!"} className={styles["card__Wrapper"]}>
      <Formik
        initialValues={{ name: "", email: "", date: format(new Date(), "yyyy-MM-dd"), countryCode: "", phoneNumber: "" }}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <Form className={styles["wrapper-form"]}>
          <Wrapper className={styles["wrapper-field"]}>
            <label>Name:</label>
            <Field name="name" type="text" className={styles["field"]} placeholder="Name..." validate={validateName} />
            <ErrorMessage name="name" component="div" className={styles["error-field"]} />
            <label>Email:</label>
            <Field name="email" type="email" className={styles["field"]} placeholder="Email..." validate={validateEmail} />
            <ErrorMessage name="email" component="div" className={styles["error-field"]} />
            <label>Birth Date:</label>
            <Field name="date" type="date" className={styles["field"]} validate={validateBirthDate} />
            <ErrorMessage name="date" component="div" className={styles["error-field"]} />
            <label>Phone:</label>
            <Container className={styles["phone__Wrapper"]}>
              <Field
                name={"countryCode"}
                component={CountryCodeSelect}
                options={options}
                className={styles["select__code"]}
              />
              <Field
                name="phoneNumber"
                type="phone"
                className={` ${styles["field__Phone"]}`}
                placeholder="Type your phone number..."
                maxLength="9"
                validate={validatePhoneNumber}
              ></Field>
            </Container>
            <ErrorMessage name="phoneNumber" component="div" className={styles["error-field"]} />
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
            <button type="reset" className={styles["button-black"]}>
              Reset
              <FontAwesomeIcon icon={["fas", "refresh"]} size={"lg"} />
            </button>
          </Container>
        </Form>
      </Formik>
    </Card>
  );
};
