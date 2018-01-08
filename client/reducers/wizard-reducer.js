export default (state = {}, action) => {
    let {type, payload} = action;
    let newState = {...state};
    switch(type) {
        case 'CREATE_WIZARD':
            
            newState[payload._id] = payload;
            return newState;

        case 'UPDATE_WIZARD':
            newState[payload._id].name = payload.name;
            return newState;

        case 'DELETE_WIZARD':
            delete newState[payload.id];
            return newState;

        case 'INIT':
            payload.map(wizard => newState[wizard._id] = wizard);
            return newState;
        
        default:
            return newState
    }

}