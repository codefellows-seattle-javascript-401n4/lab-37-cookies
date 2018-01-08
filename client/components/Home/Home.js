import React from 'react';
import ReactDom from 'react-dom';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            cookie: '',
            loggedIn: false
        };
    }

    render() {
        return (
            <div>Home.js</div>
        )
    }
}

module.exports = Signin;