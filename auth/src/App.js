import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyBuj1ITGTYXNirCcLeam2yPqZ8H8VS9TL0",
            authDomain: "auth-58ba1.firebaseapp.com",
            databaseURL: "https://auth-58ba1.firebaseio.com",
            projectId: "auth-58ba1",
            storageBucket: "auth-58ba1.appspot.com",
            messagingSenderId: "2840192363"
        }
        firebase.initializeApp(config);
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
};


export default App;
