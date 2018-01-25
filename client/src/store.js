import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

import { fileData } from './state';

const reducers = {
  fileData: fileData.reducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer, applyMiddleware(fileData.reporter, fileData.thunk));

export default store;
