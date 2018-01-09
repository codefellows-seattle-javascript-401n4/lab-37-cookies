const initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){

    case 'USER_CREATE': return [...state, payload];

    default: return state;
    
  }
};
