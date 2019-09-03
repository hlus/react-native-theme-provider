import React, { Component } from 'react';

import { IThemeProps, ThemeContext, ThemeProviderComponent } from './types';

export const createThemeProvider = <T extends {}>(theme: T, ThemeContext: ThemeContext<T>): ThemeProviderComponent<T> => {
    return class ThemeProvider extends Component<IThemeProps<T>> {
        static defaultProps = {
            theme,
            changeTheme: () => { },
        }

        render() {
            const { children, changeTheme, theme } = this.props;
            return (
                <ThemeContext.Provider value={{ theme, changeTheme }}>
                    {children}
                </ThemeContext.Provider>
            );
        }
    }
}