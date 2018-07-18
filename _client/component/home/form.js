import React from 'react';
import ReactDom from 'react-dom';

import Form from './Form.js';
import Err from './error.js'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    collectFormData = (data) => {
        if ((data.username === undefined) || (data.password === undefined)) return this.props.error("Please enter a username and password.");

        (data.signedIn) ? this.props.auth.signup(data) : this.props.auth.signin(data)
    }


    render() {
        return (
            <div>
                <p>Login or Signup</p>

                <Form collect={this.collectFormData}/>
                <Err message={this.props.state.auth.message}/>
            </div>
        )
    }
}

module.exports = Home;
