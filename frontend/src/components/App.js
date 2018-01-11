import '../style/main.scss';

import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Dashboard from './Dashboard'

import Costumes from './Costume/Costumes'
import Landing from './Authentication/Landing'

class App extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div>
        <Header appTitle="Costume Inventory" />
        <Switch>
        <main>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/logout' component={Landing} />
          <Route exact path='/signup' component={Landing} />
          <Route exact path='/login' component={Landing} />
          <Route exact path='/costumes' component={Costumes} />
        </main>
        </Switch>
        <Footer><p>Mookerjee Productions 2007</p></Footer>
      </div>
    )
  }
}

export default App;