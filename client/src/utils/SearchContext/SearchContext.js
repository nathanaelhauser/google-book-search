import { createContext } from 'react'

const SearchContext = createContext({
  book: '',
  books: [],
  handleInputChange: () => {},
  handleSearch: () => {},
  handleSaveBook: () => {}
})

export default SearchContext