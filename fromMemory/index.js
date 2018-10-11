import React from 'react';
import { AppRegistry, Text } from 'react-native';

const App = (props) => {
    const { textBox } = appStyles;
    return (
        <Text style={textBox}>Greetings Programs!</Text>
    );
};

const appStyles = {
    textBox: {
        textSize: 100
    }
};

AppRegistry.registerComponent('fromMemory', () => App);
