import superagent from 'superagent';
import cookie from 'react-cookies';

cookie.save('Auth', 'hello');


console.log(cookie.load('Auth'));

const signup = (payload) => ({
    type: 'SIGNUP',
    payload
});

const signin = (payload) => ({
    type: 'SIGNIN',
    payload
});

const signout = (payload) => ({
    type: 'SIGNOUT',
    payload
});

export const auth_signup = payload => dispatch => {
    console.log('auth-signup');
}


export const auth_signin = payload => dispatch => {
    console.log('auth-signin');
}

export const auth_signout = payload => dispatch => {
    console.log('auth-signout');
}