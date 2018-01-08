import React from 'react';
import ReactDom from 'react-dom';

class WizardCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    captureName = (event) => {
        this.setState({name: event.target.value});
    }
    createWizard = (event) => {
        event.preventDefault();
        this.props.wizardCreate(this.state.name);
    }

    render() {
        return (
            <form>
                <input onChange={this.captureName} placeholder="Enter wizard name"/>
                <button onClick={this.createWizard}>Create Wizard</button>
            </form>
        )
    }
}

module.exports = WizardCreate;