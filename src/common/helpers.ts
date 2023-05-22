export const setDefaultCurrency = (currencyCode: string) => {
  window.localStorage.setItem("defaultCurrency", currencyCode);
};
export const getDefaultCurrency = () => {
  return window.localStorage.getItem("defaultCurrency") || "USD";
};
