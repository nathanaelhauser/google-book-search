import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core'
import SearchContext from '../../utils/SearchContext'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import BookCard from '../BookCard'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 15,
    backgroundColor: "#3f51b5"
  }
}))

const SearchList = () => {
  const classes = useStyles()
  const { books, handleSaveBook } = useContext(SearchContext)

  return (
    <>
      {
        books.length
          ?
            <Paper className={classes.root}>
              <Grid container spacing={3}>
                {
                  books.map((book, index) =>
                    <BookCard
                      key={index}
                      identifier={index}
                      title={book.title}
                      authors={book.authors ? book.authors.join(',') : ''}
                      publishedDate={book.publishedDate}
                      description={book.description}
                      image={book.image}
                      link={book.link}
                      action="Save"
                      handleBookButtonClick={handleSaveBook} />)
                }
              </Grid>
            </Paper>
          : ''
      }
    </>
  )
}

export default SearchList