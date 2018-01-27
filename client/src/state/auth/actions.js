/* global __AUTH_URL__ */

import superagent from 'superagent';
import cookie from 'react-cookies';

const setUser = (auth) => {
  console.log('set user', auth);
  return ({
    type: 'SET_AUTH_USER',
    payload: auth,
  });
};

export const authLogin = (user = {}) => (dispatch) => {
  const cookieToken = cookie.load('auth');
  console.log('cookieToken', cookieToken);

  const authenticateUsingToken = (token) => {
    console.log(token);
    return superagent.get(`${__AUTH_URL__}/validate`)
      .set('Authorization', `Bearer ${token}`);
  };

  const authenticateUsingBasic = newUser => superagent.get(`${__AUTH_URL__}/signin`)
    .withCredentials()
    .auth(newUser.username, newUser.password);

  let authMethod = () => authenticateUsingBasic(user); // {}

  if (cookieToken) { authMethod = () => authenticateUsingToken(cookieToken); }

  return authMethod()
    .then((res) => {
      console.log(res.body);
      dispatch(setUser(res.body));
      return res;
    })
    .catch(e => console.error('Authenticaton Error:', e.message));
};

export const authCreateAccount = user => dispatch => superagent.post(`${__AUTH_URL__}/signup`)
  .withCredentials()
  .send(user)
  .then((res) => {
    console.log(res.body);
    dispatch(setUser(res.body));
    return res;
  })
  .catch(e => console.error('Authenticaton Error:', e.message));


export const authLogout = () => ({
  type: 'DELETE_AUTH_TOKEN',
});
