import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import store from "./store";

export const ReduxProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
