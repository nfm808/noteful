import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import STORE from './dummy-store'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar';
import MainSidebar from './components/sidebar/main_sidebar/mainSidebar';
import NoteViewSidebar from './components/sidebar/note_sidebar/noteViewSidebar';
import './App.css'

class App extends Component {
    state = {
      store: STORE,
  }

  
  render() {
    const { folders, notes } = this.state.store;
    console.log(folders)
    return (
      <div className="app">
        <Header title="Noteful" />
        <Sidebar store={this.state.store}>
          <Route 
            exact 
            path='/' 
            render={() =>
              <MainSidebar
                list={folders}
              />
            } 
          />
          <Route 
            path='/folder/:id'
            render={(props) => 
              <MainSidebar 
                active={props.match.params.id.slice(1)}
                list={folders}
              />} 
          />
        </Sidebar>

      </div>
    )
  }
}

export default App
