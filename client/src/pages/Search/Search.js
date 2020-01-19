import React, { useState } from 'react'
import BookForm from '../../components/BookForm'
import BookAPI from '../../utils/BookAPI'
import SearchContext from '../../utils/SearchContext'
import SearchList from '../../components/SearchList'

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
    console.log(`Searching for ${bookState.book}`)
    getBooks(bookState.book)
      .then(({ data: { items: books } }) => {
        let tempBooks = []
        books.forEach(({ volumeInfo: book}) => {
          console.log(book)
          tempBooks.push({
            title: book.title,
            authors: book.authors,
            publishedDate: book.publishedDate,
            description: book.description,
            image: book.imageLinks.thumbnail,
            link: book.previewLink
          })
        })
        console.log(tempBooks)
        setBookState({ ...bookState, book: '', books: tempBooks })
      })
      .catch(e => console.error(e))
  }

  bookState.handleSaveBook = event => {
    let blah = event.target.dataset.id
  }

  return (
    <SearchContext.Provider value={bookState}>
      <BookForm/>
      <SearchList/>
    </SearchContext.Provider>
  )
}

export default Search