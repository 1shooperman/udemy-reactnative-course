import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: ''
    }; 

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        autoCorrect={false}
                        placeholder="user@example.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        autoCorrect={false}
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        )
    }
};


export default LoginForm;