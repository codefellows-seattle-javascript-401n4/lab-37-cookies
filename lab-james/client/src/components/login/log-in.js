import React from 'react';
import {renderIf} from '../../lib/render-if.js';
import {connect} from 'react-redux';

import {userCreate} from './log-in-actions';
import LogInForm from './log-in-form.js';

class LogIn extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      renderLogIn: false,
      renderCreate: false,
    }

    this.toggleLogIn = this.toggleLogIn.bind(this);
    this.toggleCreate = this.toggleCreate.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  toggleLogIn(){
    if(this.state.renderLogIn){
      this.setState({renderLogIn: false});
    }

    if(!this.state.renderLogIn){
      this.setState({renderLogIn: true});
    }
  }

  toggleCreate(){
    if(this.state.renderCreate){
      this.setState({renderCreate: false});
    }

    if(!this.state.renderCreate){
      this.setState({renderCreate: true});
    }
  }

  createUser(state){
    this.props.handleUserCreate(Object.assign({}, state));
  }

  render(){
    return(
      <React.Fragment>
        {renderIf(
          !this.state.renderLogIn && !this.state.renderCreate,
          <div className="log-in">
            <button id="renderLogIn" onClick={this.toggleLogIn}>Log In</button>
            <p>New user?  Create a profile here.</p>
            <button id="renderCreate" onClick={this.toggleCreate}>Create Profile</button>
          </div>
        )}
        {renderIf(
          this.state.renderLogIn,
          <div className="log-in">
            <LogInForm title="Log In" toggleForm={this.toggleLogIn} />
          </div>
        )}
        {renderIf(
          this.state.renderCreate,
          <div className="log-in">
            <LogInForm title="Create New Profile" toggleForm={this.toggleCreate} submitAction={this.createUser} />
          </div>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
    handleUserCreate: user => dispatch(userCreate(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
