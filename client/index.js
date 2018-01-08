import React from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import combinedReducers from './reducers/combineReducers.js';
import thunk from './middleware/thunk.js';
import reporter from './middleware/reporter.js';

let store = createStore(combinedReducers, applyMiddleware(thunk, reporter));

import App from './components/app.js';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
ReactDom.render(<Main />, document.getElementById('app'));