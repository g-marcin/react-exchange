import { FC } from "react";
import { FieldProps } from "formik";
import Select from "react-select";
import ReactSelectProps from "react-select";
import Option from "react-select";
import styles from "./countryCodeSelect.module.css";

export const FormikSelect: FC<ReactSelectProps & FieldProps> = ({ options, field, form }) => (
  <Select
    options={options}
    name={field.name}
    value={options ? options.find((option) => option.value === field.value) : ""}
    onChange={(option: Option) => form.setFieldValue(field.name, option.value)}
    onBlur={field.onBlur}
    className={styles["select"]}
  />
);
