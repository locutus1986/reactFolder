import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList'
import Counter from './Counter'

class App extends Component {

  state = {
    isFiltered: false,
    pendingguest: "",
    guests : [
      {
        name : 'Atticus',
        isConfirmed : false,
        isEditing: false
      },
      {
        name : 'Traci',
        isConfirmed : true,
        isEditing: false
      },
      {
        name : 'Oliver',
        isConfirmed : true,
        isEditing: true
      },
    ]
  }

  toggleGuestPropertyAt = (property, indexOfGuest) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (indexOfGuest === index) {
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest
      })
    })
  }

  setNameAt = (name, indexOfGuest) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (indexOfGuest === index) {
          return {
            ...guest,
            name
          }
        }
        return guest
      })
    })
  }

  toggleFilter= () => {
    this.setState({ isFiltered: !this.state.isFiltered})
  }

  handleNameInput= e => {
    this.setState({ pendingGuest : e.target.value })
  }

  newGuestSubmitHandler = e =>{
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    })
  }

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  removeGuestAt = index =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1),
      ]
    })

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt("isEditing", index);

  getTotalInvited = () => this.state.guests.length
  getAttendingGuests = () => this.state.guests.reduce(
    (total, guest)=> guest.isConfirmed ? total + 1 : total,
    0)
  // getUnconfirmedGuest = () =>

  render() {
    const totalInvited = this.getTotalInvited()
    const numberAttending = this.getAttendingGuests()
    const numberUnconfirmed = totalInvited - numberAttending
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form onSubmit={this.newGuestSubmitHandler}>
              <input
                type="text"
                onChange={this.handleNameInput}
                value={this.state.pendingGuest}
                placeholder="Invite Someone"
              />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              /> Hide those who haven't responded
            </label>
          </div>
          <Counter
            totalInvited={totalInvited}
            numberAttending={numberAttending}
            numberUnconfirmed={numberUnconfirmed}
          />
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt= {this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;