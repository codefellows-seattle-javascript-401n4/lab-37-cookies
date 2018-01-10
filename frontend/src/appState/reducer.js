import {combineReducers} from 'redux';

import costumeReducer from '../components/Costume/reducer';
import authReducer from '../components/Authentication/reducer';

export default combineReducers({
  costumes: costumeReducer,
  creds: authReducer
})