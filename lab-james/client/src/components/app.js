import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './header.js';
import Nav from './nav.js';
import LogIn from './login/log-in.js';
import Home from './home/home.js';
import {authInit} from './auth/auth-actions.js';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.handleAuthInit();
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <Nav />
        <LogIn />
        <main>
          <Route exact path='/' component={Home} />
        </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
