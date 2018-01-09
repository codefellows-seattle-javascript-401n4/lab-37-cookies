import React from 'react';

class LogInForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitAction(this.state);
    console.log('submited');
    this.props.toggleForm();
  }

  render(){
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h3>{this.props.title}</h3>
          <label htmlFor="username">Username:
            <input type="text" id="username" onChange={this.handleChange} required />
          </label>
          <label htmlFor="password">Password:
            <input type="password" id="password" onChange={this.handleChange} required />
          </label>
          <input type="submit" value="Submit" />
          <button onClick={this.props.toggleForm}>Cancel</button>
        </form>
      </React.Fragment>
    )
  }
}

export default LogInForm;
