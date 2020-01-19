
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  button: {
    minWidth: 275,
    minHeight: 275,
    marginTop: 70,
    marginBottom: 70
  },
  card: {
    minWidth: 275,
    minHeight: 275
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
    <Grid container spacing={3} justify="center">
      <Grid item xs={4}>
        <Button href="/search">
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2" align='center'>
                Find New Book
            </Typography>
            </CardContent>
          </Card>
        </Button>
      </Grid>

      <Grid item xs={4}>
        <Button href="/saved">
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2" align='center'>
                View Saved Books
            </Typography>
            </CardContent>
          </Card>
        </Button>
      </Grid>
    </Grid>
  )
}
export default Home