import React, { Component }  from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, logoutUser } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    onLogout() {
        this.props.logoutUser();
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    renderError() {
        if (this.props.error) {
            return (
                    <View style={{ backgroundColor: 'white' }}>
                        <Text style={styles.errorTextStyle}>
                            {this.props.error}
                        </Text>
                    </View>
            );
        }
    }

    renderForm() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }

    renderLogout() {
        return (
            <Card>
                <CardSection>
                    <Button onPress={this.onLogout.bind(this)}>
                        Logout
                    </Button>
                </CardSection>
            </Card>
        );
    }

    render() {
        switch (this.props.loggedIn) {
            case false:
                return this.renderForm();
            default:
                return this.renderLogout();
        }
    }
}

const mapStateToProps = (state) => {
    const { email, password, error, loading, loggedIn } = state.auth;
    return {
        email,
        password,
        error,
        loading,
        loggedIn
    };
};

const styles = {
    errorTextStyle: {
        fontSize:20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, logoutUser })(LoginForm);
