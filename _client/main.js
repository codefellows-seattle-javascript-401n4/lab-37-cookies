// import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import combinedReducer from './reducers/combineReducers.js';
import report from './middleware/report.js';
import thunk from './middleware/thunk.js';

let store = createStore(combinedReducers, applyMiddleware(thunk, report));

import App from './components/app.js';

class Main extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <Provider store = {store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  }
}

const root = document.getElementById('root');
ReactDom.render(<Main/>, root);
