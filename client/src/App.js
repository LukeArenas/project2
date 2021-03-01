import './App.css'
import React, { Component } from 'react'
import Welcome from './pages/Welcome'
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      recentlyViewed: [],
      selectedListing: '',
      addedToCart: [],
      page: 0
    }
  }

  //METHODS

  handleUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Welcome handleUsername={this.handleUsername} />}
          />
        </Switch>
      </div>
    )
  }
}