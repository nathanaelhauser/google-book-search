import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

const Home = () => {
  return (
    <Container>
      <Grid container spacing={3}>
      <Grid item xs={6}>
          <Card style={{ height: '15rem', backgroundColor: 'blue', color: 'white', textAlign: 'center' }}>Find New</Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{ height: '15rem', backgroundColor: 'blue', color: 'white', textAlign: 'center' }}>View Saved</Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home