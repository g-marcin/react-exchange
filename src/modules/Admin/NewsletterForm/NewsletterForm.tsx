import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormikSelect } from "../../../components/CountryCodeSelect";
import { Card, Container, Wrapper } from "../../../components";
import countryPhoneCodes from "../../../assets/json/countryPhoneCodes.json";
import styles from "./newsletterForm.module.css";
import { format } from "date-fns";

export const NewsletterForm: FC = () => {
  const navigate = useNavigate();
  function validateName(value: string) {
    let error;
    if (value.length < 3) {
      error = "Minimum 3 characters";
    }
    if (value.length > 24) {
      error = "Maximum 24 characters";
    }
    if (!/^[A-Za-z]/i.test(value)) {
      error = "invalid name characters";
      if (value.length === 0) {
        error = "Required";
      }
    }
    return error;
  }
  function validateEmail(value: string) {
    let error;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "invalid email shape";
      if (value.length === 0) {
        error = "Required";
      }
    }
    return error;
  }
  function validateBirthDate(value: Date | null) {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  }
  function validatePhoneNumber(value: string) {
    let error;
    if (!value) {
      error = "Required";
    }
    if (!/^([0-9])+$/i.test(value)) {
      error = "Please type numbers only";
      if (value.length === 0) {
        error = "Required";
      }
    }
    if (value.length < 9) {
      error = "Phone numbers should contain 9 digits";
    }
    return error;
  }
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
    <Card title={"Join the newsletter!"} className="space-between">
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
              <Field name={"countryCode"} component={FormikSelect} options={options} className={styles["select"]} />
              <Field
                name="phoneNumber"
                type="phone"
                className={`${styles["field"]} ${styles["phone"]}`}
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
