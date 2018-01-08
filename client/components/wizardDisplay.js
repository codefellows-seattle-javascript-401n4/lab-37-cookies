import React from 'react';
import ReactDom from 'react-dom';

import WizardUpdate from './wizardUpdate.js';

class WizardDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updating: false
        };
    }
    
    _deleteWizard = () => {
        this.props.deleteWizard(this.props.wizard._id);
    }

    toggleUpdate = () => {
        let opposite = !this.state.updating;
        this.setState({
            updating: opposite
        });
    }

    updateWizard = () => {
        return (this.state.updating) ?
            <WizardUpdate update={this.props.updateWizard} toggle={this.toggleUpdate} wizard={this.props.wizard}/> :
            <h6>{this.props.wizard.name}</h6>
    }

    render() {
        return (
            <div>
                {this.updateWizard()}
                <button onClick={this.toggleUpdate}>Update Wizard</button>
                <button onClick={this._deleteWizard}>Delete Wizard</button>
            </div>
        )
    }
}

module.exports = WizardDisplay;