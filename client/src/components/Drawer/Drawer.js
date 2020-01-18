import React, { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DrawerContext from '../../utils/DrawerContext'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SearchIcon from '@material-ui/icons/Search'
import SaveIcon from '@material-ui/icons/Save'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

const Drawer = () => {
  const classes = useStyles()

  const [ drawerState, setDrawerState ] = useState({
    isOpen: false
  })

  const toggleDrawer = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState({ ...drawerState, isOpen: open })
  }

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key={'Search'}>
          <ListItemIcon><SearchIcon /></ListItemIcon>
          <ListItemText primary={'Search'} />
        </ListItem>
        <ListItem button key={'Saved'}>
          <ListItemIcon><SaveIcon /></ListItemIcon>
          <ListItemText primary={'Saved'} />
        </ListItem>
      </List>
    </div>
  )

  return (
    <DrawerContext.Provider value={drawerState}>
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
      <SwipeableDrawer
        open={drawerState.isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {sideList()}
      </SwipeableDrawer>
    </DrawerContext.Provider>
  )
}



export default Drawer
