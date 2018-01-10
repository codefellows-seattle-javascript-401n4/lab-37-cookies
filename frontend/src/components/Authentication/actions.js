import request from 'superagent';
import cookie from 'react-cookies';

let API = `${__API_URL__}`;

export const setToken = (token) => ({
  type: 'TOKEN_SET',
  payload: token
})

export const removeToken = () => ({
  type: 'TOKEN_REMOVE',
  payload: token
})

export const signup = user => (dispatch) => {

  return request.post(`${API}/signup`)
    .send(user)
    .then(res => { return dispatch(tokenSet(res.body.text)) })
    .catch(e => console.error('Authentication Error: ', e.message));
    
}

export const login = user => (dispatch) => {

  let token = cookie.load("creds");
  if(token) { return dispatch(setToken(token)); }

  return request.get(`${API}/login`)
    .withCredentials()
    .auth(user.username, user.password)
    .then(res => { return dispatch(tokenSet(res.body.text)) })
    .catch(e => console.error('Authentication Error: ', e.message));
}

export const logout = () => dispatch(removeToken());