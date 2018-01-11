import React from 'react';
import {renderIf} from '../../../lib/utils';
import {connect} from 'react-redux';

import AuthForm from './Auth-form';
import Costumes from '../Costume/Costumes';
import * as auth from './actions';


class Landing extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      loggedIn: false
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this); 

  }

  componentWillMount() {
    if(this.props.token)
      this.props.history.push('/costumes')
  }

  handleLogin(user) {
    this.props.login(user)
      .then(() => this.history.push('/costumes'))
      .catch(console.error);
  }

  handleSignup(user) {
    this.props.signup(user)
    .then(() => this.history.push('/costumes'))
    .catch(console.error);
  }

  render() {
    
    let {location} = this.props;

    return (
      <div className="landing">
       {renderIf(location.pathname === '/login',
        <div>
          <h3>Login</h3>
          <AuthForm action='login' handler={this.handleLogin}/>
        </div>
       )}
        {renderIf(location.pathname === '/signup',
        <div>
          <h3>Signup</h3>
          <AuthForm action='signup' handler={this.handleSignup}/>
        </div>
       )}
      </div>
    )     
  }  
}

const mapStateToProps = (state) => ({
  creds:state.creds
});
  
const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(auth.signup(user)),
  login: (user) => dispatch(auth.login(user)),
  logout: (user) => dispatch(auth.logout(user))
});
  
export default connect(mapStateToProps,mapDispatchToProps)(Landing);