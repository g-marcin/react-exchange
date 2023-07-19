import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import format from 'date-fns/format';
import subDays from 'date-fns/subDays';
import { FC, PropsWithChildren, createContext, useState } from 'react';
import { httpClient } from '../../common';
import {
    CurrencyContextType,
    CurrencyType,
    FetchedCurrenciesDTO,
} from '../../types';

export const CurrencyContext = createContext<CurrencyContextType>({
    currencyLatest: { code: 0 },
    fetchedCurrencyNames: { name: 'name' },
    presentCurrency: { currencyCode: '', rate: 0 },
    baseCurrency: '',
    currencyHistory: { '': { '': 0 } },
    currencyButtonHandler: () => {
        return;
    },
    currencyBaseHandler: () => {
        return;
    },
});

export const CurrencyContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const [presentCurrency, setPresentCurrency] = useState<CurrencyType>({
        currencyCode: 'USD',
        rate: 0,
    });
    const [baseCurrency, setBaseCurrency] = useState(
        presentCurrency?.currencyCode === 'AUD' ? 'USD' : 'AUD',
    );

    const {
        data: fetchedCurrencyNames,
        isLoading: isNamesLoading,
        isError: isNamesError,
    } = useQuery({
        queryKey: ['currencyNames'],
        queryFn: () => {
            const currencyNames = httpClient
                .get('/currencies')
                .then((response: AxiosResponse) => {
                    return response.data;
                });
            return currencyNames;
        },
    });

    const {
        data: currencyLatest,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['currencyLatest', presentCurrency, baseCurrency],
        queryFn: () => {
            const rates = httpClient
                .get(`/latest?from=${baseCurrency}`)
                .then((response: AxiosResponse) => {
                    const fetchedCurrenciesDTO: FetchedCurrenciesDTO =
                        response.data;

                    function fetchedDataMapper(
                        fetchedCurrencies: FetchedCurrenciesDTO,
                    ) {
                        return fetchedCurrencies.rates;
                    }
                    return fetchedDataMapper(fetchedCurrenciesDTO);
                });
            return rates;
        },
    });

    const {
        data: currencyHistory,
        isLoading: isHistoryLoading,
        isError: isHistoryError,
    } = useQuery({
        queryKey: ['currencyHistory', presentCurrency, baseCurrency],
        queryFn: () => {
            const date = new Date();
            const dateFrom = format(date, 'yyyy-MM-dd');
            const dateTo = format(subDays(date, 8), 'yyyy-MM-dd');
            const history = httpClient
                .get(
                    `/${dateTo}..${dateFrom}?from=${baseCurrency}&to=${
                        presentCurrency ? presentCurrency.currencyCode : 'USD'
                    }`,
                )
                .then((response: AxiosResponse) => {
                    return response.data.rates;
                });
            return history;
        },
    });

    const currencyButtonHandler = (currencyCode: string): void => {
        if (!currencyLatest) {
            return;
        }
        setPresentCurrency({
            currencyCode: currencyCode,
            rate: currencyLatest[`${currencyCode}`],
        });
    };
    const currencyBaseHandler = (currencyCode: string): void => {
        setBaseCurrency(currencyCode);
    };

    return (
        <CurrencyContext.Provider
            value={{
                currencyLatest: currencyLatest || { '': 0 },
                fetchedCurrencyNames: fetchedCurrencyNames,
                presentCurrency: presentCurrency,
                baseCurrency: baseCurrency,
                currencyHistory: currencyHistory,
                currencyButtonHandler: currencyButtonHandler,
                currencyBaseHandler: currencyBaseHandler,
            }}
        >
            {children}
        </CurrencyContext.Provider>
    );
};
