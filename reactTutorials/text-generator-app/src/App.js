import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        paras: 4,
        html: true,
        text: ''
      }
  }

  componentWillMount(){
    this.getSampleText()
  }

  getSampleText(){
    axios.get('')
  }

  render() {
    return (
      <div className="App">
       <h1>here</h1>
      </div>
    );
  }
}

export default App;
