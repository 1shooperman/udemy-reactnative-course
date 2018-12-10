import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EmployeeList extends Component {
    render() {
        return (
            <View style={{flex:1, paddingTop:50}}>
                <Text>Employee List</Text>
                <Text>Foo</Text>
                <Text>Bar</Text>
                <Text>Baz</Text>
                <Text>Employee List</Text>
                <Text>Foo</Text>
                <Text>Bar</Text>
                <Text>Baz</Text>
            </View>
        );
    }
}

export default EmployeeList;
