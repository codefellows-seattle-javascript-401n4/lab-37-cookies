import React from 'react';

import FileData from '../FileData';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header> Visual Files
        </header>
        <main>
          <FileData />
        </main>

        <footer />
      </div>
    );
  }
}
