
import React from 'react';

let initialState = {
  username: '',
  password: '',
  email: ''
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
    e.preventDefault();
    this.props.handler( Object.assign({}, this.state));   
    this.setState(initialState);
  }

  render() {
      
    return (
      <form className='authForm' onSubmit={this.handleSubmit}>
      <span>Username</span>
      <input
        name='username'
        type='text'
        value={this.state.username}
        placeholder='username'
        onChange={this.state.handleChange}
        />
       <span>Password</span>
       <input
       name='password'
       type='password'       
       value={this.state.password}
       placeholder='password'
       onChange={this.state.handleChange}
       />
      <span>Email</span>
      <input
      name='email'
      type='email'       
      value={this.state.email}
      placeholder='email'
      onChange={this.state.handleChange}
      />
      <button type='submit'>signup</button>
     </form>
    )     
  }  
}

export default AuthForm;