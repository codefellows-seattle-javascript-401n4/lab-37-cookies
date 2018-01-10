
import React from 'react';

let initialState = {
  username: '',
  password: '',
  email: '',
  action: ''
}

class AuthForm extends React.Component {
    
  constructor(props){
    super(props)

    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleSubmit(e){
    console.log('button submit')
    // e.preventDefault();
    let handler = this.state.action === "signup" ? this.props.signup : this.props.login;
    // handler(this.state);   
    this.setState(initialState);
  }

  render() {

    let {location} = this.props;
    this.state.action = location.pathname === '/login' ? 'login' : 'signup';
    
    return (
      <form className='authForm' onSubmit={this.handleSubmit}>
      <span>Username</span>
      <input
        name='username'
        type='text'
        placeholder='username'
        onChange={this.state.handleChange}
        />
       <span>Password</span>
       <input
       name='password'
       type='password'       
       placeholder='password'
       onChange={this.state.handleChange}
       />
      <span>Email</span>
      <input
      name='email'
      type='email'       
      placeholder='email'
      onChange={this.state.handleChange}
      />
      <button type='submit'>{this.state.action}</button>
     </form>
    )     
  }  
}

export default AuthForm;