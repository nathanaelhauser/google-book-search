import { createContext } from 'react'

const SavedContext = createContext({
  books: [],
  handleDeleteBook: () => {},
  handleViewBook: () => {}
})

export default SavedContext