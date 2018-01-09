import React from 'react';
import {Route} from 'react-router-dom';

import Header from './header.js';
import LogIn from './login/log-in.js';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <main>
          <Route exact path='/' component={LogIn} />
        </main>
      </React.Fragment>
    )
  }
}

export default App;
