import React, { Component } from 'react';
import Reader from './Reader/Reader';
import items from './publications.json';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Reader items={items} />
      </div>
    );
  }
}

export default App;
