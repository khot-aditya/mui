import { ThemeOptions } from '@mui/material';
import { FC, createContext, useState } from 'react';

type ThemeContext = {
    themeColors: any;
    setThemeColors: React.Dispatch<any>
    colorOptions: any;
    setColorOptions: React.Dispatch<any>
    theme: ThemeOptions | undefined;
    setTheme: React.Dispatch<React.SetStateAction<ThemeOptions | undefined>>
};

export const ThemeContext = createContext<ThemeContext>(
    {} as ThemeContext
);

interface Props {
    children: React.ReactNode;
}

export const ThemeContextProvider: FC<Props> = ({ children }) => {
    const [themeColors, setThemeColors] = useState({} as any);
    const [colorOptions, setColorOptions] = useState({} as any);
    const [theme, setTheme] = useState<ThemeOptions | undefined>(undefined);

    return (
        <ThemeContext.Provider
            value={{
                themeColors,
                setThemeColors,
                colorOptions,
                setColorOptions,
                theme,
                setTheme
            }}>
            {children}
        </ThemeContext.Provider>
    );
};