import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { 
        title, 
        artist, 
        thumbnail_image,
        image,
        url
    } = album;

    const { 
        thumbnailStyle, 
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={ thumbnailContainerStyle }>
                    <Image 
                        source={{ uri: thumbnail_image }} 
                        style={ thumbnailStyle }
                    />
                </View>
                <View style={ headerContentStyle }>
                    <Text style={ headerTextStyle }>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    source={{ uri: image }} 
                    style={ imageStyle }
                />
            </CardSection>
            <CardSection>
                <Button onPress={ () => Linking.openURL(url) }>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
};


export default AlbumDetail;
