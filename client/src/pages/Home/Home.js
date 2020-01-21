
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
  button: {
    marginTop: 70,
    marginBottom: 70
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const Home = _ => {
  const classes = useStyles()

  return (
    <Grid container spacing={4} direction="row" justify="space-around" alignItems="center">
      <Grid item xs={12} sm={6} md={4} className={classes.buttonContainer}>
        <Button href="/search">
          <Card className={classes.card}>
            <CardMedia
              component="img"
              alt="Find Books"
              height="150"
              image={require('./books.jfif')}
              title="Find Books"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" align="center">
                FIND A NEW BOOK
                </Typography>
              <Typography variant="body1" color="textSecondary" component="p" align="center">
                Click here to search for new books
                </Typography>
            </CardContent>
          </Card>
        </Button>
      </Grid>

      <Grid item xs={12} sm={6} md={4} className={classes.buttonContainer}>
        <Button href="/saved">
          <Card className={classes.card}>
            <CardMedia
              component="img"
              alt="Saved Books"
              height="150"
              image={require('./savedbooks.jfif')}
              title="Saved Books"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" align="center">
                Your Saved Books
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p" align="center">
                Come see what books you saved
              </Typography>
            </CardContent>
          </Card>
        </Button>
      </Grid>
    </Grid>
  )
}

export default Home