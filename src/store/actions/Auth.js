import * as actionTypes from './actionTypes';
import firebase from '../../firebase';
/* import axios from '../../axios'; */
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (userId, token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId: userId,
        idToken: token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        let url = null;
        if (!isSignUp) {
            url = firebase.auth().signInWithEmailAndPassword(email, password);
        } else {
            url = firebase.auth().createUserWithEmailAndPassword(email, password);
        }
        url.then(res => {
            localStorage.setItem('token', res.user.refreshToken);
            localStorage.setItem('userId', res.user.uid);
            dispatch(authSuccess(res.user.uid, res.user.refreshToken))
        })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err))
            })
    };
};

export const authCheckState = () => {
    console.log("Auth");
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(userId, token));
        }
    }
};