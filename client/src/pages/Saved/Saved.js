import React from 'react'
import BookCard from '../../components/BookCard'
import SavedList from '../../components/SavedList'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Saved = () => {

  return (
    <Container>
      <div align="center">
        <Typography variant="h2">Saved Books</Typography>
        <SavedList />
        {/* <BookCard /> */}
      </div>
    </Container>
    
  )
}

export default Saved