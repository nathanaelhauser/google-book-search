import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DrawerContext from '../../utils/DrawerContext'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { green } from '@material-ui/core/colors'



const useStyles = makeStyles(theme => ({
  
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 60,
    padding: '0 30px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const NavBar = () => {
  const classes = useStyles()

  const { toggleDrawer } = useContext(DrawerContext)

  return (
    <div >
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Google Books Search
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar