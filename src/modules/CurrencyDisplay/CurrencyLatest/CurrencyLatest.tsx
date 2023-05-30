import { FC, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyContext } from "../../../contexts";
import { RootState, setPresentCurrency } from "../../../store";
import { Container, Loader, ImageWithFallback } from "../../../components";
import styles from "./currencyLatest.module.css";

export const CurrencyLatest: FC = () => {
  const presentCurrency = useSelector((state: RootState) => state.currency.presentCurrency);
  const baseCurrency = useSelector((state: RootState) => state.currency.baseCurrency);
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const currencyContextObject = useContext(CurrencyContext);

  if (!currencyContextObject) {
    return <Loader />;
  }
  const { latestCurrencyRates } = currencyContextObject;

  const handleReduxCurrencyChange = (currencyCode: string) => {
    dispatch(setPresentCurrency(currencyCode));
  };
  return (
    <>
      <Container className={styles["display__Latest"]}>
        {presentCurrency ? (
          <>
            <input
              type="text"
              id="input"
              value={inputText || ""}
              onChange={async (e) => {
                await setInputText(e.target.value);
              }}
            />
            <p>{JSON.stringify(presentCurrency)}</p>
            <p>{JSON.stringify(baseCurrency)}</p>
            <button
              onClick={() => {
                const input = document.getElementById("input");
                if (!input) {
                  return;
                }
                handleReduxCurrencyChange(inputText);
                console.log(presentCurrency);
              }}
            >
              Redux
            </button>
            <div>
              <ImageWithFallback currencyCode={presentCurrency} className={styles["display__Flag"]} />
            </div>
            <span
              className={styles["latest-big"]}
            >{`Latest ${presentCurrency} to ${baseCurrency} rate:  ${latestCurrencyRates[presentCurrency]}`}</span>
            <span
              className={styles["latest-small"]}
            >{`${presentCurrency} to ${baseCurrency} ${latestCurrencyRates[presentCurrency]}`}</span>
            <div>
              <ImageWithFallback currencyCode={baseCurrency} className={styles["display__Flag"]} />
            </div>
          </>
        ) : (
          `Please choose currency to compare...`
        )}
      </Container>
    </>
  );
};
