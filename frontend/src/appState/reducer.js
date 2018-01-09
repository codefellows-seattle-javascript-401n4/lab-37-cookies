import {combineReducers} from 'redux';

import costumeReducer from '../components/Costume/reducer';

export default combineReducers({
  costumes: costumeReducer,
})