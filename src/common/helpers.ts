export const setDefaultCurrency = (currencyCode: string) => {
  window.localStorage.setItem("defaultCurrency", currencyCode);
};
export const getDefaultCurrency = () => {
  return window.localStorage.getItem("defaultCurrency") || "USD";
};
function validate(value: string) {
  let error;
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "invalid email shape";
    if (value.length === 0) {
      error = "Required";
    }
  }
  return error;
}
