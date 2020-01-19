import React, { useState } from 'react'
import BookForm from '../../components/BookForm'
import BookAPI from '../../utils/BookAPI'
import SearchContext from '../../utils/SearchContext'
import SearchSection from '../../components/SearchSection'

const { getBooks, searchBooks, updateBook, deleteBook} = BookAPI

const Search = () => {
  const [bookState, setBookState] = useState ({
    book: '',
    books: []
  })
  bookState.handleInputChange = event => {
    setBookState({ ...bookState, [event.target.name]: event.target.value })
  }
  bookState.handleSearch = event => {
    event.preventDefault()
    getBooks(bookState.book)
      .then(data => {
        // let books = JSON.parse(JSON.stringify(data))
        console.log(data)
      })
      .catch(e => console.error(e))
  }
  return (
    <SearchContext.Provider value={bookState}>
      <BookForm/>
      <SearchSection/>
    </SearchContext.Provider>
  )
}

export default Search