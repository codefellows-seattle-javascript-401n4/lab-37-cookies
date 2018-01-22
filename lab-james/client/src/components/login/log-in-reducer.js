const initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){

    case 'USER_CREATE': return [...state, payload];

    case 'USER_ASSIGN': return [payload];

    case 'USER_LOGOUT': return initialState;

    default: return state;

  }
};
