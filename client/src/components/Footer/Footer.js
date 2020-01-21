import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'static',
    minHeight: '10vh',
    marginTop: '8px',
    marginBottom: '8px',
    borderRadius: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3f51b5',
    color: 'white'
  },
  gridFooter: {
    margin: 0
  },
  leftFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center'
  },
  rightFooter: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'start',
    alignItems: 'center'
  },
  githubRepo: {
    color: 'white'
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Container>
        <Grid container spacing={3} className={classes.gridFooter}>
          <Grid item xs={12} sm={6} className={classes.leftFooter}>
            <span>
              Book Icon made by
              <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware"> Good Ware </a> 
              from 
              <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a>
            </span>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.rightFooter}>
            <IconButton
              className={classes.githubRepo}
              aria-label="delete"
              href="https://github.com/mesmerizingYeti/google-book-search">
              <GitHubIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default Footer