import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SearchContext from '../../utils/SearchContext'

const useStyles = makeStyles(theme => ({
  formGrid: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'middle',
      alignItems: 'center'
  },
  width100: {
    width: '100%'
  }
}))

const BookForm = () => {
  const classes = useStyles()
  const { handleInputChange, handleSearch, book } = useContext(SearchContext)

  const handleInputEnter = event => {
    if (event.key === 'Enter') {
      handleSearch(event)
    }
  }

  return (
    <Container align='center'>
      <Grid container spacing={3} justify="center">
        <Grid item xs={8} sm={6} className={classes.formGrid}>
          <form noValidate autoComplete="off" className={classes.width100}>
            <TextField type='text' name='book' id="standard-basic" label="Book Title" value={book} onChange={handleInputChange} onKeyPress={handleInputEnter} className={classes.width100} />
            <br />
            <br />
            <Button variant="contained" color="primary" onClick={handleSearch} className={classes.width100}>
              SEARCH
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BookForm