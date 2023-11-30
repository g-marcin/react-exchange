import { FC, createContext, useEffect, useState, PropsWithChildren } from "react";
import { isThemeDark, setTheme } from "../../common";
import { ThemeContextType } from "../../types";

const initialContextValues = {
  isDark: false,
  themeButtonHandler: () => {
    return;
  },
};

export const ThemeContext = createContext<ThemeContextType>(initialContextValues);
export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState(isThemeDark());

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    const theme = isDark ? "dark" : "light";
    body.className = theme;
    setTheme(theme);
  }, [isDark]);

  function themeButtonHandler() {
    setIsDark(!isDark);
    const body = document.getElementsByTagName("body")[0];
    body.className = isDark ? "dark" : "light";
    setTheme(isDark ? "dark" : "light");
  }
  return (
    <ThemeContext.Provider
      value={{
        isDark: isDark,
        themeButtonHandler: themeButtonHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
