import superagent from 'superagent';
import cookie from 'react-cookies';

module.exports = actions = {};

actions.signup = (payload) => ({
    type: 'SIGNUP',
    payload
});

actions.signin = (payload) => ({
    type: 'SIGNIN',
    payload
});

actions.signout = (payload) => ({
    type: 'SIGNOUT',
    payload
});

actions.init = (payload) => ({
    type: 'INIT',
    payload
});

actions.error = message => ({
    type: 'ERROR',
    payload: message
})

actions.auth_signin = payload => dispatch => {
    let {username, password} = payload;
    superagent('http://localhost:3000/signin').auth(username, password).end((err, response) => {
        cookie.save('Auth', response.body.token);
        dispatch(signin({authenticated: response.body.authenticated, message: response.body.message}));
    });
}

actions.auth_signout = payload => dispatch => {
    superagent('http://localhost:3000/logout').set('Authorization', `Bearer ${cookie.load('Auth')}`).end((err, response) => {
        cookie.remove('Auth');
        dispatch(signout());
    });
}
