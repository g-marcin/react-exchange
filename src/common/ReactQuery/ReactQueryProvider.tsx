import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";

interface ReactQueryProviderProps extends PropsWithChildren {
  optional?: string;
}

export const queryClient = new QueryClient();

export const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
