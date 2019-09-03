import React, { Component } from 'react';

import { IThemeProps, ThemeContext } from './types';

export const createWithTheme = <T extends {}>(ThemeContext: ThemeContext<T>) => (PrimaryComponent: typeof Component) =>
    class ThemedComponent extends Component<IThemeProps<T> & any> {

        renderThemedComponent = (values: IThemeProps<T>) => <PrimaryComponent {...this.props} {...values}/>

        render() {
            return (
                <ThemeContext.Consumer>
                    {this.renderThemedComponent}
                </ThemeContext.Consumer>
            );
        }
    }