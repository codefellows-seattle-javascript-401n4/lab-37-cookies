import superagent from 'superagent';

const createWizard = name => ({
    type:'CREATE_WIZARD',
    payload: name
});


const updateWizard = payload => ({
    type: 'UPDATE_WIZARD',
    payload
});


const deleteWizard = id => ({
    type: 'DELETE_WIZARD',
    payload: id
});


const init = (payload) => ({
    type: 'INIT',
    payload
});



export const initDB = payload => dispatch => {
    superagent.get('http://localhost:3000/wizard').end((err, response) => {
        dispatch(init(response.body));
    });
}


export const wizardCreate = payload => dispatch => {

    superagent.post('http://localhost:3000/wizard').send({name: payload}).end((err, response) => {
        dispatch(createWizard(response.body));
    });

}

export const wizardUpdate = payload => dispatch => {
    superagent.put(`http://localhost:3000/wizard/${payload._id}`).send(payload).end((err, response) => {
        dispatch(updateWizard(response.body));
    });

} 

export const wizardDelete = payload => dispatch => {
    superagent.delete(`http://localhost:3000/wizard/${payload}`).end((err, response) => {
        dispatch(deleteWizard({id: response.body._id}));
    }); 

}