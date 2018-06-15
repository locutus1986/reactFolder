import React, { Component } from 'react';

import User from './User'

class Users extends Component{
  state = {
    users: [
      {name: "Zachary", age: 20},
      {name: "Traci", age: 30},
      {name: "Atticus", age: 40},
      {name: "Ollie", age: 90 },
    ],
    title: "Users List"
  }

  theChange = (up) => {
    const tempState = this.state.users.map((user) =>{
      const tempUser = user;
      if(up === true){
        tempUser.age += 10
      }else {
        if(tempUser.age >= 10){
          tempUser.age -= 10
        }else{
          tempUser.age = 0
        }
      }
        return tempUser
    })
    this.setState({
      tempState
    })
  }

  lowerAge = () => {
      this.theChange(false)
  }

  raiseAge = () =>{
    this.theChange(true)
  }

  render(){
    return(
      <div>
        <button onClick={this.lowerAge}> lower age by 10 </button>
        <button onClick={this.raiseAge}> raise age by 10 </button>
        <br />
        <h1>{this.state.title}</h1>
        {
          this.state.users.map((user, index)=>{
            return <User key={1+index} age={user.age}>{user.name}</User>
          })
        }
      </div>
    )
  }
}

export default Users
