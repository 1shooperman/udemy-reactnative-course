import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { REACT_APP_FIREBASE_API_KEY } from 'react-native-dotenv'; 
import { Header, Spinner, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: REACT_APP_FIREBASE_API_KEY,
            authDomain: "auth-58ba1.firebaseapp.com",
            databaseURL: "https://auth-58ba1.firebaseio.com",
            projectId: "auth-58ba1",
            storageBucket: "auth-58ba1.appspot.com",
            messagingSenderId: "2840192363"
        }
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false  });
            }
        });
    };

    renderContent() {
        const { spinnerViewStyle, logoutViewStyle } = styles;

        switch (this.state.loggedIn) {
            case true:
                 return (
                     <View style={logoutViewStyle}>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                     </View>
                 );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={spinnerViewStyle}>
                        <Spinner size="large" />
                    </View>
                );
        };
    };
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    };
};

const styles = {
    logoutViewStyle: {
        flexDirection: 'row',
    },
    spinnerViewStyle: {
        flexDirection: 'row',
        flex: 1
    }
};

export default App;
