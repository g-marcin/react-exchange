import { FC } from "react";
import { Card } from "../components";
import { ReturnButton } from "../components/ReturnButton";

type ErrorPageProps = {
  errorMessage: string;
};

const ErrorPage: FC<ErrorPageProps> = ({ errorMessage }) => {
  return (
    <Card title={errorMessage}>
      <ReturnButton />
    </Card>
  );
};

export default ErrorPage;
