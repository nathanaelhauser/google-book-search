import React, { useEffect, useState } from 'react'
import SavedContext from '../../utils/SavedContext'
import BookAPI from '../../utils/BookAPI'
import SavedList from '../../components/SavedList'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const { getSavedBooks } = BookAPI

const Saved = () => {
  const [savedState, setSavedState] = useState({
    books: []
  })

  savedState.handleDeleteBook = () => {
    console.log('will delete')
  }

  useEffect(() => {
    getSavedBooks()
      .then(({ data: books }) => setSavedState({ ...savedState, books }))
      .catch(e => console.error(e))
  }, [])

  return (
    <SavedContext.Provider value={savedState}>
      <Container>
        <div align="center">
          <Typography variant="h2">Saved Books</Typography>
          <SavedList />
        </div>
      </Container>
    </SavedContext.Provider>

  )
}

export default Saved