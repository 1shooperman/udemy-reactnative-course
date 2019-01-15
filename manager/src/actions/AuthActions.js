import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(err => {
                console.log(err);

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(err => loginUserFail(dispatch, err));
            });
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        firebase.auth().signOut()
            .then(res => {
                logoutUserSuccess(dispatch, res);
            })
            .catch(err => {
                logoutUserFail(dispatch, err);
            });
    }
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const loginUserFail = (dispatch, err) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: err
    });
};

const logoutUserSuccess = (dispatch, res) => {
    dispatch({ 
        type: LOGOUT_USER,
        payload: res
    });

    Actions.login();
};

const logoutUserFail = (dispatch, err) => {
    console.log(err);

    dispatch({ 
        type: LOGOUT_USER,
        payload: err
    });
}; 
