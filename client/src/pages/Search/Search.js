import React, { useState } from 'react'
import BookForm from '../../components/BookForm'
import BookAPI from '../../utils/BookAPI'
import SearchContext from '../../utils/SearchContext'
import SearchList from '../../components/SearchList'

const { searchForBooks, addBook } = BookAPI

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
    searchForBooks(bookState.book)
      .then(({ data: { items: books } }) => {
        let tempBooks = []
        books.forEach(({ volumeInfo: book}) => {
          tempBooks.push({
            title: book.title,
            authors: book.authors,
            publishedDate: book.publishedDate,
            description: book.description,
            image: book.imageLinks ? book.imageLinks.thumbnail : '',
            link: book.previewLink
          })
        })
        setBookState({ ...bookState, book: '', books: tempBooks })
      })
      .catch(e => console.error(e))
  }

  bookState.handleSaveBook = (event, identifier) => {
    console.log(bookState.books[identifier])
    addBook(bookState.books[identifier])
      .then(book => {
        let [...tempBooks] = bookState.books
        tempBooks.splice(identifier, 1)
        setBookState({ ...bookState, books: tempBooks })
      })
      .catch(e => console.error(e))
  }

  return (
    <SearchContext.Provider value={bookState}>
      <BookForm/>
      <br />
      <SearchList/>
    </SearchContext.Provider>
  )
}

export default Search