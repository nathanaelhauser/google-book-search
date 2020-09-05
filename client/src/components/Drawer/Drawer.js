import React, { useContext, forwardRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DrawerContext from '../../utils/DrawerContext'
import {
  SwipeableDrawer,
  List
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import SaveIcon from '@material-ui/icons/Save'
import ListItemLink from '../ListItemLink'

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
        <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
        <ListItemLink to="/search" primary="Search" icon={<SearchIcon />} />
        <ListItemLink to="/saved" primary="Saved" icon={<SaveIcon />} />
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
