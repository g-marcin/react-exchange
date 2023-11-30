import { FC } from "react";
import { Wrapper } from "../../components";
import { NewsletterForm } from "./NewsletterForm";
import styles from "./admin.module.css";
import { DefaultCurrencyForm } from "./DefaultCurrencyForm";

const Admin: FC = () => {
  return (
    <Wrapper className={styles["main-wrapper"]}>
      <DefaultCurrencyForm />
      <NewsletterForm />
    </Wrapper>
  );
};

export default Admin;
