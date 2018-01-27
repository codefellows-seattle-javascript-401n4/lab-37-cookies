import React from 'react';
import { connect } from 'react-redux';

import * as authActions from '../../state/auth/actions';
import AuthForm from '../../components/auth-form';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    console.log('props.auth', props.auth);
    this.renderChildren = this.renderChildren.bind(this);
    this.renderAuthForm = this.renderAuthForm.bind(this);

    this.state = { init: true };
  }

  componentWillMount() {
    this.props.authLogin()
      .then(() => this.setState({ init: false }));
  }

  renderAuthForm() {
    const { showForm } = this.props;
    return showForm ? (
      <AuthForm handleCreate={this.props.authCreate} handleLogin={this.props.authLogin} />
    ) : null;
  }

  renderChildren() {
    const { token, children } = this.props;
    return token ? children : null;
  }

  render() {
    if (this.state.init) { return null; }
    return (

      <React.Fragment>
        {this.renderChildren()}
        {this.renderAuthForm()}
      </React.Fragment>

    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch, getState) => ({
  authLogin: user => dispatch(authActions.authLogin(user)),
  authCreate: user => dispatch(authActions.authCreateAccount(user)),
  authLogout: () => dispatch(authActions.authLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
