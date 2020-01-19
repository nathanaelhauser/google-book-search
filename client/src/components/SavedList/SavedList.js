import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import DeleteIcon from '@material-ui/icons/Delete'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
}))

const SavedList = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="Book1" />
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Book2" />
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
        </ListItem>
      </List>
      
    </div>
  )
}

export default SavedList