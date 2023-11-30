export const setDefaultCurrency = (currencyCode: string) => {
  window.localStorage.setItem("defaultCurrency", currencyCode);
};
export const getDefaultCurrency = () => {
  return window.localStorage.getItem("defaultCurrency");
};

export const setTheme = (themeName: string) => {
  window.localStorage.setItem("theme", themeName);
};

export const isThemeDark = () => {
  const theme = window.localStorage.getItem("theme");
  return theme === "dark";
};
