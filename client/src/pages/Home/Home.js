
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
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
    <Grid container spacing={4} justify='center' alignItems='center'>
      <Grid item xs={4} >
        <Button href="/search">
           <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Find Books"
          height="150"
          image= {require('./books.jfif')}
          title="Find Books"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            FIND A NEW BOOK
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Click here to search for new books
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Button>
      </Grid>
    

      <Grid item xs={4}>
        <Button href="/saved">
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Saved Books"
          height="150"
          image= {require('./savedbooks.jfif')}
          title="Saved Books"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Your Saved Books
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Come see what books you saved
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Button>
      </Grid>
    </Grid>
  )
}
export default Home
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
// });

// const Home = () => {
//   const classes = useStyles();

//   return (
   
//   );
// }
