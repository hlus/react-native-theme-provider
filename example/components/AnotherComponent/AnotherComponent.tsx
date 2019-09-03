import React from 'react'
import { View } from 'react-native'

import { useTheme } from '../../themes/themes';
import { styles } from './styles';

export const AnotherComponent: React.FC = () => {
    const { theme } = useTheme();
    return (<View style={[styles.def, { backgroundColor: theme.second }]} />
    )
}