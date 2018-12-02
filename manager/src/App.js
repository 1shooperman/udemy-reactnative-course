import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers  from './reducers';
import { REACT_APP_FIREBASE_API_KEY} from 'react-native-dotenv';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: REACT_APP_FIREBASE_API_KEY,
            authDomain: "manager-app-77363.firebaseapp.com",
            databaseURL: "https://manager-app-77363.firebaseio.com",
            projectId: "manager-app-77363",
            storageBucket: "manager-app-77363.appspot.com",
            messagingSenderId: "502931851950"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)} >
                <LoginForm />
            </Provider>
        );
    }
};

export default App;
