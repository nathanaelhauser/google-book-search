import React, { useContext } from 'react'
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

  const { isOpen, toggleDrawer } = useContext(DrawerContext)

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
    <div>
      <SwipeableDrawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  )
}

export default Drawer
