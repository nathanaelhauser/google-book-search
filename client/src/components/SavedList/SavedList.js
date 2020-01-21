import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SavedContext from '../../utils/SavedContext'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import BookCard from '../BookCard'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 15,
    backgroundColor: "#3f51b5"
  },
  text: {
    color: 'white'
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
            : <Container>
                <Typography 
                  align="center" 
                  variant="h5"
                  className={classes.text}>
                    Add Books from the Search Page!
                </Typography>
              </Container>
        }
      </Grid>
    </Paper>
  )
}

export default SavedList