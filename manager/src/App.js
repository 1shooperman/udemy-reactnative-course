import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers  from './reducers';
import { REACT_APP_FIREBASE_API_KEY} from 'react-native-dotenv';
import LoginForm from './components/LoginForm';
import Router from './Router'

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
        //console.log(config);
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store} >
                <Router />
            </Provider>
        );
    }
};

export default App;
