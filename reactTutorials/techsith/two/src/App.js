import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: "Zachary"
  }

  changeName = (newName) => {
    this.setState(
      {
          name: newName
      }
    )
  }

  changeNameFromInput = (e) =>{
    this.setState({
      name:e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <br /> <br />
        <button onClick={() => { this.changeName("Attiucs") } }>Change State Anon function</button>
        <button onClick={ this.changeName.bind(this, 'Ollie') }>Change State bind</button>
        <br /> <br />
        <input type='text' onChange={ this.changeNameFromInput } value={this.state.name}/>
        <br /> <br />
        <div>{ this.state.name }</div>
      </div>
    );
  }
}

export default App;
