import { AxiosResponse } from 'axios';
import { useContext, useEffect, useState } from 'react';
import { httpClient } from '../../common';
import { CurrencyContext } from '../../contexts';

export const useCountryDetails = () => {
    const [countryDetails, setCountryDetails] = useState<any | null>();
    const { presentCurrency } = useContext(CurrencyContext);
    useEffect(() => {
        if (!presentCurrency) {
            return;
        }
        httpClient
            .get(
                `https://restcountries.com/v3.1/currency/${presentCurrency.currencyCode}`,
            )
            .then((response: AxiosResponse) => {
                setCountryDetails(response.data);
            });
    }, [presentCurrency]);
    return countryDetails;
};
