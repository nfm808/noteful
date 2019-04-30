import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import STORE from './dummy-store'
import Header from './components/header/header'
import './App.css'

class App extends Component {
    state = {
      store: STORE,
  }

  
  render() {
    return (
      <section className="app">
        <Header title="Noteful" />
      </section>
    )
  }
}

export default App
