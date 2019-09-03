import { createContext, useContext } from 'react';

import { createWithTheme } from './createWithTheme';
import { createThemeProvider } from './createThemeProvider';

export const createThemes = <T extends {}>(defaultTheme: T) => {
    const ThemeContext = createContext({ theme: defaultTheme, changeTheme: (name: string) => {} });

    const ThemeProvider = createThemeProvider(defaultTheme, ThemeContext);
    const withTheme = createWithTheme(ThemeContext);
    const useTheme = (overrides?: any) => ({
        ...useContext(ThemeContext),
        ...overrides,
    });

    return {
        ThemeProvider,
        withTheme,
        useTheme,
    };
}
