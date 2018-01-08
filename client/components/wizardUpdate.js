import React from 'react';
import ReactDom from 'react-dom';

class WizardUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newName: ''};
    }

    componentDidMount() {
        this.setState({id: this.props.wizard._id});
    }


    captureNewName = (event) => {
        this.setState({newName: event.target.value});
        
    }
    updateWizard = (event) => {
        event.preventDefault();
        this.props.update({name: this.state.newName, _id: this.state.id});
        this.props.toggle();
    }

    render() {
        return (
            <div>
                <form>
                <input  onChange={this.captureNewName} placeholder="Enter new name"/>
                <button id={this.props.wizard._id} onClick={this.updateWizard}>Change Name</button>
                <button onClick={this.props.toggle}>Cancel</button>
                </form>
            </div>
        )
    }
}

module.exports = WizardUpdate;