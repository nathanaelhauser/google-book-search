import { createContext } from 'react'

const SavedContext = createContext({
  books: [],
  handleDeleteBook: () => {}
})

export default SavedContext