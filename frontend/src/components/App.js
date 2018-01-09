import '../style/main.scss';

import React from 'react';
import {Route} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Costumes from './Costume/Costumes'

class App extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div>
        <Header appTitle="Costume Inventory" />
        <main>
          <Route exact path='/' component={Costumes} />
        </main>
        <Footer>
          <p>Mookerjee Productions 2007</p>
        </Footer>
      </div>
    )
  }
}

export default App;