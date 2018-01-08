import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';

import * as actions from '../actions/wizard-action.js';

import WizardCreate from './wizardCreate.js';
import WizardDisplay from './wizardDisplay.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.init();
    }

    displayWizards = () => {
        return Object.keys(this.props.state.wizards).map(id => {
            return <WizardDisplay key={id} updateWizard={this.props.wizardUpdate} deleteWizard={this.props.wizardDelete} wizard={this.props.state.wizards[id]}/>;
        });
    }

    render() {
        return (
            <div>
                <WizardCreate wizardCreate={this.props.wizardCreate}/>
                {this.displayWizards()}
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
        wizardCreate: payload => dispatch(actions.wizardCreate(payload)),
        wizardUpdate: payload => dispatch(actions.wizardUpdate(payload)),
        wizardDelete: payload => dispatch(actions.wizardDelete(payload)),
        init: () => dispatch(actions.initDB())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);