import React, { Component } from 'react'
import { View } from 'react-native'

import Button from '../../components/Button/Button';
import { styles } from './styles';

export class Entrypoint extends Component {
    render() {
        console.log({ EntryPointProps: this.props });
        return (
            <View style={styles.defWrapper}>
                <Button text="Test" />
            </View>
        )
    }
}
