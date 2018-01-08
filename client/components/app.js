import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { Link, Route, Router } from 'react-router-dom';

import * as actions from '../actions/auth-action.js';

import Home from './Home/Home.js';
import Content from './Content/Content.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('Initial props: ', props);
    }

    render() {
        return (
            <div id="base-div">

                <nav>
                    <Link to="/">Home</Link>
                </nav>

                <main>
                    {(this.props.state.auth.loggedIn) ? <Content /> : <Home />}
                </main>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch, payload) => {

    return {
        signup: payload => dispatch(actions.auth_signup(payload)),
        signin: payload => dispatch(actions.auth_signin(payload)),
        signout: payload => dispatch(actions.auth_signout(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);