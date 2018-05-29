import React, { Component } from 'react';
import './App.css';
import queryString from 'query-string'

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
    let playlist = this.props.playlist
    return(
      <div className="playlist" style={{width: '25%', display:"inline-block",...textColor}}>
        <img />
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song => <li>{song.name}</li>)}
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
        <input type='text' onKeyUp={(e)=>
          this.props.onTextChange(e.target.value)}/>
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
    this.state = {
      serverData: {},
      filterString: ''
    }
  }
  componentDidMount(){
    let parse = queryString.parse(window.location.search)
    let accessToken = parse.access_token

    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization' : 'Bearer' + accessToken}
    }).then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    let playlistToRender = this.state.serverData.user ?
    this.state.serverData.user.PlayLists
    .filter(playlist =>
        playlist.name.toLowerCase().includes(
        this.state.filterString.toLowerCase())
    ): []
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style={textColor}>
          {this.state.serverData.user.name}'s PlayList
        </h1>
          <PlayListCounter PlayLists={playlistToRender}/>
          <HoursCounter PlayLists={playlistToRender}/>
          <Filter onTextChange={text=> {
            this.setState({filterString: text})}}/>
          {
            playlistToRender.map(playlist =>
              <PlayList playlist={playlist}/>
          )}

        </div> : <button onClick={() => window.location = 'http://localhost:8888/login'}
          style={{
                 padding: '20px',
                 fontSize: '50px',
                 marginTop: '20px'
               }}>
              Sign in with Spotify
            </button>
        }
      </div>
    );
  }
}

export default App;
