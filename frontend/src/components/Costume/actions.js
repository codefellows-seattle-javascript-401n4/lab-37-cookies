import request from 'superagent';

let API = `${__API_URL__}`;

export const costumeInitialize = () => dispatch => {

  request.get(`${API}/costumes`)
    .then(res => dispatch(initAction(res.body)))
    .catch(console.error);
}

export const createCostume = payload => dispatch => {

  console.log('payload is ', payload);
  request.post(`${API}/costumes`)
    .send(payload)
    .then(res => dispatch(create(res.body)))
    .catch(console.error);
  
};

export const updateCostume = payload => dispatch => {
  
  request.put(`${API}/costume/${payload._id}`)
    .send(payload)
    .then(res => {
      dispatch(update(res.body));
      location.reload();      
    })
    .catch(console.error);

};

export const deleteCostume = payload => dispatch => {

  let id = payload;

  request.delete(`${API}/costume/${payload}`)
  .send(id)
  .then(res => {
    dispatch(destroy(id));
    location.reload();
  })
  .catch(console.error);

}

const initAction = list => ({
  type: 'INIT',
  payload: list
});

const create = costume => ({
    type:"COSTUME_ADD",
    payload: costume
});
  
const update = costume => ({
    type: "COSTUME_UPDATE",
    payload: costume
});
  
const destroy = costume => ({
    type: "COSTUME_DESTROY",
    payload: costume
});