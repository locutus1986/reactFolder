import React, { Component } from 'react';
import './App.css';

import Parent from './components/parentToChild/parent'

class App extends Component {
  state = {
    title:"placeholder"
  }

  changeTheWorld = (newTitle) => {
    this.setState({title: newTitle})
  }

  render() {
    return (
      <div className="App">
        <Parent changeTheWorld={this.changeTheWorld.bind(this, 'new world')}
          doSomethingElse={this.changeTheWorld.bind(this, 'whatever man')}
          title={this.state.title} />
      </div>
    );
  }
}

export default App;
