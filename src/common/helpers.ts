export const setDefaultCurrency = (currencyCode: string) => {
  window.localStorage.setItem("defaultCurrency", currencyCode);
};
export const getDefaultCurrency = () => {
  return window.localStorage.getItem("defaultCurrency");
};

export const setTheme = (themeName: string) => {
  window.localStorage.setItem("theme", themeName);
};
const getThemePreference = () => {
  return window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
};
export const getTheme = () => {
  return window.localStorage.getItem("theme");
};
