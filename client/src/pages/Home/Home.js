import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const Home = () => {
  return (
    <Container>
      <Grid container spacing={3}>
      <Grid item xs={6}>
          <Paper style={{ height: '15rem', backgroundColor: 'blue', color: 'white', textAlign: 'center' }}>Find New</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ height: '15rem', backgroundColor: 'blue', color: 'white', textAlign: 'center' }}>View Saved</Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home