import React, { Component } from 'react';
import HelloEn from './helloEn';
import HelloJa from './helloJa';

class App extends Component {
  render() {
    return (
      <div>
        <HelloEn speaker="john" />
        <HelloJa speaker="jane" />
      </div>
    );
  }
}

export default App;
