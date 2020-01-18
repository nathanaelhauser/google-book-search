// import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// import Card from '@material-ui/core/Card'
// import Button from '@material-ui/core/Button'

// const Home = () => {
//   return (
//     <Container>
//       <Grid container spacing={3}>
//       <Grid item xs={6}>
//           <Card style={{ height: '15rem', backgroundColor: 'blue', color: 'white', textAlign: 'center' }}>Find New</Card>
//         </Grid>
//         <Grid item xs={6}>
//           <Card style={{ height: '15rem', backgroundColor: 'blue', color: 'white', textAlign: 'center' }}>View Saved</Card>
//         </Grid>
//       </Grid>
//     </Container>
//   )
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Home = _ => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container spacing={3} justify="center">
       <Grid item xs={4}>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" align='center'>
              Find New Book
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2" align='center'>
              View Saved Books
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
export default Home