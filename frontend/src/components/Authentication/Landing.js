import React from 'react';
import {renderIf} from '../../../lib/utils';
import {connect} from 'react-redux';
import AuthForm from './Auth-form';
import * as auth from './actions';


class Landing extends React.Component {
    
  render() {
    
    let {page} = this.props;

    return (
      <div className="landing">
        {renderIf(page.pathname === '/',
          <div>
            <h2>Welcome</h2>
          </div>
        )}
        {renderIf(page.pathname === '/signup',
          <div>
            <h2>Signup</h2>
            <AuthForm handler={this.props.handleAuth}/>
          </div>
        )}
        {renderIf(page.pathname === '/login',
          <div>
            <h2>Login</h2>
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