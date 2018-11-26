import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    render () {
        const { titleStyles } = styles;

        return (
            <CardSection>
                <Text style={titleStyles}>
                    {this.props.library.title}
                </Text>
            </CardSection>
        );
    }
};

const styles = {
    titleStyles: {
        fontSize: 18,
        paddingLeft: 15
    }
};


export default ListItem;
