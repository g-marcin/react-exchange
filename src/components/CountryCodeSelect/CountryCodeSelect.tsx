import { FieldInputProps, FormikProps } from "formik";
import { FC } from "react";
import { default as Select } from "react-select";
import styles from "./countryCodeSelect.module.css";

type MyOption = {
  label: string;
  value: string;
};
type FormikSelectProps = {
  options: MyOption[];
  field: FieldInputProps<string>;
  form: FormikProps<string>;
};

export const FormikSelect: FC<FormikSelectProps> = ({ options, field, form }) => (
  <Select
    options={options}
    name={field.name}
    value={options ? options.find((option: MyOption) => option.value === field.value) : ""}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange={(option: any) => form.setFieldValue(field.name, option?.value)}
    onBlur={field.onBlur}
    className={styles["select"]}
  />
);
