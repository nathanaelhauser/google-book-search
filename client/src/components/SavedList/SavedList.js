import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SavedContext from '../../utils/SavedContext'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import BookCard from '../BookCard'
import lightBlue from '@material-ui/core/colors/lightBlue'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: lightBlue
  }
}))

const SavedList = props => {
  const classes = useStyles()

  const { books, handleDeleteBook } = useContext(SavedContext)

  return (
    <Paper className={classes.root}>
      <Grid container spacing={3}>
        {
          books.length
            ? books.map((book, index) =>
                <BookCard
                  key={index}
                  identifier={book._id}
                  title={book.title}
                  authors={book.authors ? book.authors.join(',') : ''}
                  publishedDate={book.publishedDate}
                  description={book.description}
                  image={book.image}
                  link={book.link}
                  action="Delete"
                  handleBookButtonClick={handleDeleteBook} />)
            : ''
        }
      </Grid>
    </Paper>
  )
}

export default SavedList