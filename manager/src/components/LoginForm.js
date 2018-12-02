import React, { Component }  from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

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

    renderError() {
        if (this.props.error) {
            return (
                <CardSection>
                    <View style={{ backgroundColor: 'white' }}>
                        <Text style={styles.errorTextStyle}>
                            {this.props.errror}
                        </Text>
                    </View>
                </CardSection>
            );
        }
    }

    render() {
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
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { email, password, error } = state.auth;
    return {
        email,
        password,
        error
    };
};

const styles = {
    errorTextStyle: {
        fontSize:20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
