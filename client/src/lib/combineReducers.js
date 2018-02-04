
import {combineReducers} from 'redux';

import categoryReducer from '../components/category/categoryReducer.js';
import authReducer from '../components/auth/reducer.js';
import profileReducer from '../components/profile/reducer.js';


export default combineReducers({
    categories: categoryReducer,
    profile: profileReducer,
    auth: authReducer
});
