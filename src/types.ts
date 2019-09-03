import { Context, ComponentType } from 'react';

type ChangeThemeCB = (name: string) => void;

interface IThemeProvider<T> {
    theme: T;
    changeTheme: ChangeThemeCB;
}

export interface IThemeProps<T> {
    theme: T;
    changeTheme: ChangeThemeCB;
}

export type ThemeContext<T> = Context<IThemeProps<T>>;
export type ThemeProviderComponent<T> = ComponentType<IThemeProvider<T>>;