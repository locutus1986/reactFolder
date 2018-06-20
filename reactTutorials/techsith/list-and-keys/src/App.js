import React, { Component } from 'react';
import './App.css';
import UniqueId from 'react-html-id'

import User from './components/User'

class App extends Component {
  constructor(){
    super()
    UniqueId.enableUniqueIds(this);
    this.state={
        users:[
          {id: this.nextUniqueId(), name:'john', age:20},
          {id: this.nextUniqueId(), name:'atticus', age:30},
          {id: this.nextUniqueId(), name:'Ollie', age:4}
        ]
    }
  }
  deleteUser = (i, e) =>{
    const users = Object.assign([], this.state.users)
    users.splice(i, 1)
    this.setState({users: users})
  }

  changeUserName = (id, e) =>{
    const index = this.state.users.findIndex((user)=>{
      return user.id === id
    })

    const user = Object.assign({}, this.state.users[index])
    user.name = e.target.value
    const users = Object.assign([], this.state.users)
    users[index] = user
    this.setState({users:users})
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, i)=>{
              return (<User
                        age={user.age}
                        key={user.id}
                        deleteEvent={this.deleteUser.bind(this, i)}
                        changeEvent={this.changeUserName.bind(this, user.id)}
                      >
                        {user.name}
                      </User>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
