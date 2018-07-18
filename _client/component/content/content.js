import React from 'react';
import ReactDom from 'react-dom';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSignout = (e) => {
        event.preventDefault();
        this.props.signout();
    }

    render() {
        return (
            <div>
                Sign Out
                <button onClick={this.handleSignout}>Sign Out</button>
            </div>
        )
    }
}

module.exports = Content;
