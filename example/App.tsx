import React, { Component } from 'react';

import { Entrypoint } from './features/Entrypoint/Entrypoint';
import { ThemeProvider, themes } from './themes/themes';

export default class App extends Component {
  state = {
    currentTheme: themes.default,
  }

  changeTheme = (name: string) => {
    this.setState({ currentTheme: themes[name] })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.currentTheme} changeTheme={this.changeTheme}>
        <Entrypoint />
      </ThemeProvider>  
    )
  }
}
