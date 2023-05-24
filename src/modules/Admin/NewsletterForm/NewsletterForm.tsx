import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container, Wrapper } from "../../../components";
import styles from "./newsletterForm.module.css";

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

  return (
    <Card title={"Join the newsletter!"}>
      <Formik
        initialValues={{ name: "", email: "", date: new Date(), phone: "" }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles["wrapper-form"]}>
            <Wrapper className={styles["wrapper-field"]}>
              <label>Name:</label>
              <Field name="name" type="text" className={styles["field"]} placeholder="Name..." validate={validateName} />
              {errors.name && touched.name && <div className={styles["error-field"]}>{errors.name}</div>}
              <label>Email:</label>
              <Field name="email" type="email" className={styles["field"]} placeholder="Email..." validate={validateEmail} />
              {errors.email && touched.email && <div className={styles["error-field"]}>{errors.email}</div>}
              <label>Birth Date:</label>
              <Field name="date" type="date" className={styles["field"]} />
              <label>Phone number:</label>
              <Field name="phone" type="phone" className={styles["field"]} placeholder="Phone number ... +00-000-000-000" />
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
        )}
      </Formik>
    </Card>
  );
};
