import React from 'react';
import Auth from './auth/auth.js';

class Nav extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <ul>
          <li><a>Home</a></li>
          <Auth>
            <li><a>Lists</a></li>
          </Auth>
        </ul>
      </React.Fragment>
    )
  }
}

export default Nav;
