import superagent from 'superagent';
import cookie from 'react-cookies';

//cookie.save('Auth', 'hello');


//console.log(cookie.load('Auth'));

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

const init = (payload) => ({
    type: 'INIT',
    payload
});

export const error = message => ({
    type: 'ERROR',
    payload: message
})

export const auth_init = () => dispatch => {
    (cookie.load('Auth') === undefined) ? dispatch(init(false)) : dispatch(init(true));
};

export const auth_signup = payload => dispatch => {
    let {username, password} = payload;

    superagent('http://localhost:3000/signup').auth(username, password).end((err, response) => {
        dispatch(signup(response.body));
    });

}


export const auth_signin = payload => dispatch => {
    let {username, password} = payload;
    superagent('http://localhost:3000/signin').auth(username, password).end((err, response) => {
        cookie.save('Auth', response.body.token);
        dispatch(signin({authenticated: response.body.authenticated, message: response.body.message}));
    });

}

export const auth_signout = payload => dispatch => {
    let auth = cookie.load('Auth');

    superagent('http://localhost:3000/logout').set('Authorization', `Bearer ${auth}`).end((err, response) => {
        cookie.remove('Auth');
        dispatch(signout());
    });
}