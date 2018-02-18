import {combineReducers} from 'redux';
import auth from './authReducer.js';

const reducer = combineReducers({
    auth
});

export default reducer;
