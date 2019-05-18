import React, { Component } from 'react'
import NewMenu from './shared/NewMenu'
import MemesContainer from './containers/MemesContainer'
import { Switch, Route } from 'react-router-dom'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <NewMenu />
        <Switch>
          <Route path='/memes' component={MemesContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
