import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { themeCreator } from './base';

export const ThemeContext = React.createContext(
  // @ts-nocheck
  (themeName: string): void => { }
);

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  const curThemeName = localStorage.getItem('appTheme') || 'LightTheme';
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);

  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  return (
    // <StylesProvider injectFirst>
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
    // </StylesProvider>
  );
};

export default ThemeProviderWrapper;
