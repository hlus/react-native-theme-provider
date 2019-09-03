README.md# react-native-theme-provider

> Provide provider for use theme in whole application, and use context consumer.

## Install

```bash
npm install --save react-native-theme-provider
```

## Usage

```tsx
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
        <EntryPoint />
      </ThemeProvider>  
    )
  }
}
```

## License

MIT © [hlus](https://github.com/hlus)
