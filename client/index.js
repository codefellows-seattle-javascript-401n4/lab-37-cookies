import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import combinedReducers from './reducers/combineReducers.js';
import thunk from './middleware/thunk.js';
import reporter from './middleware/reporter.js';

let store = createStore(combinedReducers, applyMiddleware(thunk, reporter));

import Main from './components/main.js';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </Provider>
        )
    }

}
ReactDom.render(<App />, document.getElementById('app'));
