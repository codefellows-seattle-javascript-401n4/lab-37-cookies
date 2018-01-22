import React from 'react';
import {connect} from 'react-redux';

import {authInit} from '../auth/auth-actions.js';


class Home extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.handleAuthInit();
  }

  render(){
    return(
      <React.Fragment>
        <h1>Test</h1>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleAuthInit: () => dispatch(authInit())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
