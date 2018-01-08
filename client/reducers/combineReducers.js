import {combineReducers} from 'redux';

import wizardReducer from './wizard-reducer.js';

const reducer = combineReducers({
    wizards: wizardReducer
});

export default reducer;