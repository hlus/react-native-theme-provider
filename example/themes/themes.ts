import { createThemes } from '../../src';

export const themes: { [theme:string ]: any } = {
    default: {
        name: "default",
        color: '#fff',
        second: '#000',
    },
    dark: {
        name: "dark",
        color: '#000',
        second: '#fff',
    },
};

export const { ThemeProvider, withTheme, useTheme } = createThemes(themes.default);