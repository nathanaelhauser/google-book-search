import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Saved from './pages/Saved'
import NavBar from './components/NavBar'
import Drawer from './components/Drawer'

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Drawer />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
