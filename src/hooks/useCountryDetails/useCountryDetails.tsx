import { useEffect, useState } from "react";
import { httpClient } from "../../common";
import { AxiosResponse } from "axios";

export const useCountryDetails = (currencyCode: string) => {
  const [countryDetails, setCountryDetails] = useState<AxiosResponse | null>(null);
  useEffect(() => {
    httpClient.get(`https://restcountries.com/v3.1/currency/${currencyCode}`).then((response: AxiosResponse) => {
      setCountryDetails(response.data);
    });
  }, []);
  return countryDetails;
};
