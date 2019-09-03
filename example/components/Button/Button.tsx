import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { withTheme } from '../../themes/themes';
import { AnotherComponent } from '../AnotherComponent/AnotherComponent';

// @withTheme
class Button extends Component<{ text: string } & any> {

    private handlePress = () => {
        const { theme, changeTheme } = this.props;
        changeTheme(theme.name === "default" ? "dark" : "default")
    }

    render() {
        const { text, theme } = this.props;
        console.log({ ButtonProps: this.props });
        return (
            <TouchableOpacity
                style={[styles.buttonWrapper, { backgroundColor: theme.color }]}
                onPress={this.handlePress}
            >
                <Text>{text}</Text>
                <AnotherComponent />
            </TouchableOpacity>
        );
    }
}

export default withTheme(Button);
