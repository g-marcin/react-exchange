import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { httpClient } from "../../common";

export const useCountryDetails = (currencyCode: string) => {
  const [countryDetails, setCountryDetails] = useState<AxiosResponse | null>(null);
  useEffect(() => {
    httpClient.get(`https://restcountries.com/v3.1/currency/${currencyCode}`).then((response: AxiosResponse) => {
      setCountryDetails(response.data);
    });
  }, [currencyCode]);
  return countryDetails;
};
