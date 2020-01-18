import React, { useState } from 'react'
import DrawerContext from './utils/DrawerContext'
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

  const [drawerState, setDrawerState] = useState({
    isOpen: false
  })

  drawerState.toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState({ ...drawerState, isOpen: open })
  }

  return (
    <DrawerContext.Provider value={drawerState}>
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
    </DrawerContext.Provider>
  )
}

export default App
