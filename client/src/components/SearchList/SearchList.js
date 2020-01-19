import React, { useContext } from 'react'
import SearchContext from '../../utils/SearchContext'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import BookCard from '../BookCard'

const SearchList = () => {

  const { books } = useContext(SearchContext)

  return (
    <Paper>
      {
        books.map((book, index) => 
          <BookCard 
            key={index}
            title={book.title}
            authors={book.authors ? book.authors.join(',') : ''}           
            publishedDate={book.publishedDate}
            description={book.description}
            image={book.image}
            link={book.link}
            action="Save" />)
      }
    </Paper>
  )
}

export default SearchList