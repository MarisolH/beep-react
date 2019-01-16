import React, { Component } from 'react';
import './App.css';
import YourName from './YourName';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        {(<YourName/>)}
      </div>
    );
  }
}

export default App;
