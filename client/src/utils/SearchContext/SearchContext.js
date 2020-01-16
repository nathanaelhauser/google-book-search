import { createContext } from 'react'

const SearchContext = createContext({
  book: '',
  books: [],
  handleInputChange: () => {},
  handleSearch: () => {},
  handleSaveBook: () => {},
  handleViewBook: () => {}
})

export default SearchContext