import React from 'react';
import {renderIf} from '../../../lib/utils';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import AuthForm from './Auth-form';
import * as auth from './actions';


class Landing extends React.Component {

  constructor(props){
    super(props)

  }

  render() {
    
    return (
      <div className="landing">
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
        </ul>
        {/* {renderIf(location === 'signup',
          <div>
            <h2>Signup</h2>
            <AuthForm handler={this.props.signup}/>
          </div>
        )}
        {renderIf(location === '/login',
          <div>
            <h2>Login</h2>
          </div>
        )} */}
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