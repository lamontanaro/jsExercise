import React, { Component } from "react";
import './App.scss';
import Wall from './components/Wall'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Intive - FDV Exercise</h1>
        </header>
        <Wall />
      </div>
    );
  }
}

export default App;
