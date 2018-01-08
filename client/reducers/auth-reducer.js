const initialState = {
    loggedIn: false
};

export default (state = initialState, action) => {
    let {type, payload} = action;
    let newState = {...state};
    console.log('Reducer payload: ', payload);

    switch(type) {

        case 'SIGNUP':

            return newState;

        case 'SIGNIN':

            return newState;

        case 'SIGNOUT':

            return newState;

        default:
            return newState
    }

}