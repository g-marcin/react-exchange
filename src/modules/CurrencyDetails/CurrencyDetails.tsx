import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ImageWithFallback, Loader, Wrapper } from '../../components';
import { ReturnButton } from '../../components/ReturnButton';
import { CurrencyContext } from '../../contexts';
import { useCountryDetails } from '../../hooks';
import styles from './currencyDetails.module.css';

const CurrencyDetails: FC = () => {
    const { currencyCode } = useParams();
    const { fetchedCurrencyNames } = useContext(CurrencyContext);
    const countryDetails = useCountryDetails();

    if (!currencyCode) {
        return <Loader />;
    }
    if (!countryDetails) {
        return <Loader />;
    }
    return (
        <Card title={'Details'} className={styles['details']}>
            <Wrapper className={styles['text-info']}>
                <label>Currency Code:</label>
                <p>{currencyCode}</p>
                <label>Currency Name:</label>
                <p>{fetchedCurrencyNames[currencyCode]}</p>
                <label>Currency Flag:</label>
            </Wrapper>
            <ImageWithFallback
                currencyCode={currencyCode}
                className={styles['flag__wrapper']}
            />
            {/* {JSON.stringify(countryDetails)} */}
            <div className={styles['table']}>
                {Object.entries(countryDetails[0]).map(([key, value]) => {
                    return (
                        <div className={styles['item']}>
                            <span>{key}</span>{' '}
                            <span>{JSON.stringify(value)}</span>{' '}
                        </div>
                    );
                })}
            </div>
            <ReturnButton />
            {/* TODO insert chart component and 1day/5day/week/month/3month/6month/year/full form */}
        </Card>
    );
};

export default CurrencyDetails;
