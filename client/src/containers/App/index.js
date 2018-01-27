import React from 'react';

import FileData from '../FileData';
import Auth from '../Auth';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header> Visual Files
        </header>
        <main>
          <Auth>
            <FileData />
          </Auth>
        </main>
        <footer />
      </div>
    );
  }
}
