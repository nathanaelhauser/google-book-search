import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DrawerContext from '../../utils/DrawerContext'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles(theme => ({
  
  root: {
    flexGrow: 1,
    marginBottom: 7
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  githubButton: {

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
          <IconButton
            edge="end"
            className={classes.githubButton}
            color="inherit"
            aria-label="github repository"
            href="https://github.com/mesmerizingYeti/google-book-search"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar