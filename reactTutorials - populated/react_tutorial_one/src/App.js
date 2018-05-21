import React, { Component } from 'react';
import './App.css';

let textColor = {color:'#FFB6C1'};
let fakeServerData = {
  user: {
    name:'Zachary',
    PlayLists:[
      {
        name: 'drinking songs',
        songs: [
          {name:'Drinking my baby goodbye', duration: 5000},
          {name: 'you can have the crown', duration: 45454},
          {name: 'feathered indian', duration: 8524}
        ]
      },
      {
        name: 'Driving',
        songs: [
          {name: 'shutup and let me go', duration: 45645},
          {name: 'sober',  duration: 45645},
          {name: 'dead disco', duration: 45645}
        ]
      },
      {
        name: 'Jason Isbell',
        songs: [
          {name: 'elephant', duration: 45645},
          {name: 'vampires', duration: 45645},
          {name: 'white oak', duration: 45645}
        ]
      },
      {
        name: 'classical',
        songs: [
          {name: 'nocturne in e flat major', duration: 45645},
          {name: 'bach cello suite 1 prelude', duration: 45645},
          {name: 'gymnopedie 3', duration: 45645}
        ]
      }
    ]
  }
}

class HoursCounter extends Component {
  render(){
      let allSongs = this.props.PlayLists.reduce((songs, eachPlaylist)=>{
        return songs.concat(eachPlaylist.songs)
      },[])
      let totalDuration = allSongs.reduce((sum, eachSong)=> {
        return sum + eachSong.duration
      },0)
  return(
      <div style={{width: "40%", display: 'inline-block', ...textColor}}>
        <h2>{
          Math.round(totalDuration/60)
        } Hours</h2>
      </div>
    );
  }
}

class PlayList extends Component{
  render(){
    return(
      <div style={{width: '25%', display:"inline-block",...textColor}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    return(
      <div style={textColor}>
        <img/>
        <input type='text'/>
      </div>
    );
  }
}

class PlayListCounter extends Component {
  render(){
    return(
      <div style={{width: "40%", display: 'inline-block', ...textColor}}>
        <h2>{
          this.props.PlayLists &&
          this.props.PlayLists.length
        } Playlists</h2>
      </div>
    );
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {serverData: {}}
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({serverData: fakeServerData})
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style={textColor}>
          {this.state.serverData.user.name}'s PlayList
        </h1>
          <PlayListCounter PlayLists={this.state.serverData.user.PlayLists}/>
          <HoursCounter PlayLists={this.state.serverData.user.PlayLists}/>
          <Filter/>
          <PlayList/>
          <PlayList/>
          <PlayList/>
        </div> : <h1 style={{...textColor}}> Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
