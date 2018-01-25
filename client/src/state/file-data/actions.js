/* globals __API_URL__ */
import superagent from 'superagent';

const API = `${__API_URL__}/visual_files`;

const initAction = payload => ({
  type: 'INIT',
  payload,
});

const createAction = payload => ({
  type: 'CREATE',
  payload,
});

const updateAction = payload => ({
  type: 'UPDATE',
  payload,
});

const deleteAction = id => ({
  type: 'DELETE',
  payload: id,
});

export const init = () => (dispatch) => {
  superagent.get(API)
    .then(res => dispatch(initAction(res.body)))
    .catch(console.error);
};

export const create = payload => (dispatch) => {
  superagent.post(API)
    .send(payload)
    .then(res => dispatch(createAction(res.body)))
    .catch(console.error);
};

export const update = payload => (dispatch) => {
  const url = `${API}`;
  superagent.put(url)
    .send(payload)
    .then(() => dispatch(updateAction(payload)))
    .catch(console.error);
};

export const remove = id => (dispatch) => {
  const url = `${API}/${id}`;
  superagent.delete(url)
    .then(res => dispatch(deleteAction(res.body)))
    .catch(console.error);
};
