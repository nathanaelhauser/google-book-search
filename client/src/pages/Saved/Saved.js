import React, { useEffect, useState } from 'react'
import SavedContext from '../../utils/SavedContext'
import BookAPI from '../../utils/BookAPI'
import SavedList from '../../components/SavedList'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const { getSavedBooks, deleteBook } = BookAPI

const Saved = () => {
  const [savedState, setSavedState] = useState({
    books: []
  })

  savedState.handleDeleteBook = (event, identifier) => {
    deleteBook(identifier)
      .then(() => {
        let [...tempBooks] = savedState.books
        tempBooks = tempBooks.filter(book => book._id !== identifier)
        setSavedState({ ...savedState, books: tempBooks })
        console.log('deleted')
      })
      .catch(e => console.error(e))
  }

  useEffect(() => {
    getSavedBooks()
      .then(({ data: books }) => setSavedState({ ...savedState, books }))
      .catch(e => console.error(e))
  }, [savedState])

  return (
    <SavedContext.Provider value={savedState}>
      <Container>
        <div align="center">
          <SavedList />
        </div>
      </Container>
    </SavedContext.Provider>

  )
}

export default Saved