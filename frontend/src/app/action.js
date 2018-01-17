import uuid from 'uuid/v1'
import superagent from 'superagent';

let API = `${__API_URL__}/notes`;

export const noteInitialize = () => dispatch => {
    superagent
        .get(`${API}/get`)
        .then(res => {
            let arr = res.body;
             dispatch(initAction(arr));    
        })
        .catch(console.error);
}

export const noteCreate = payload => dispatch=>{
    superagent
    .post(`${API}/post`)
    .send({"content":payload.content})
    .then(res => {
        console.log('after post:::::', res.body)
        dispatch(createAction(res.body))
    } )
    .catch(err => console.log(err))
}

export const noteDelete = payload => dispatch => {
    superagent
        .delete(`${API}/delete`)
        .send(payload)
        .then(() => {
            dispatch(deleteAction(payload))
        })
        .catch(err=>console.log(err))
}

export const noteUpdate = payload => dispatch => {
    superagent
        .put(`${API}/edit`)
        .send(payload)
        .then(()=>{
            dispatch(updateAction(payload))
        })
        .catch(err=>console.log(err))
}

const initAction = list => ({
   type: 'INIT',
   payload: list
});

const createAction = note => ({
    type: 'CREATE',
    payload: note   
});

const updateAction = note => ({
  type: 'UPDATE',
  payload: note
});

const deleteAction = note => ({
  type: 'DELETE',
  payload: note
});