
import React from 'react';
import {Route, Redirect} from 'react-router-dom';


let initialState = {
  username: '',
  password: '',
  email: '',
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
    console.log('name is ', name);
    console.log('value is ', value);
    
    this.setState({[name]: value})
    console.log('this.state is ', this.state);
    
  }

  handleSubmit(e){
    console.log('this.state in Auth-form is ', this.state)
    e.preventDefault();
    this.props.handler(this.state); 
    this.setState(initialState);
  }

  render() {

    let action = this.props.action;
    
    return (
      <form className='authForm' onSubmit={this.handleSubmit}>
      <input
        name='username'
        value={this.state.username}
        type='text'
        placeholder='username'
        onChange={this.state.handleChange}
        />
       <input
       name='password'
       value={this.state.password}       
       type='password'       
       placeholder='password'
       onChange={this.state.handleChange}
       />
      <input
      name='email'
      value={this.state.email}      
      type='email'       
      placeholder='email'
      onChange={this.state.handleChange}
      />
      <button type='submit'>{action}</button>
     </form>
    )     
  }  
}

export default AuthForm;