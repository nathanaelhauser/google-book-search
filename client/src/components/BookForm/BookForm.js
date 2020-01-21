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
}));

const useButtonStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});
// const useButtonStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: 200
//     },
//   },
// }));

const BookForm = () => {
  const classes = useStyles()
  const classesB = useButtonStyles()
  const { handleInputChange, handleSearch, book } = useContext(SearchContext)

  const handleInputEnter = event => {
    if (event.key === 'Enter') {
      handleSearch(event)
    }
  }

  return (
    <div className={classes.root} align='center' >
    <form className={classes.root} noValidate autoComplete="off" align='center'>
      <TextField type='text' name='book' id="standard-basic" label="Book Title" value={book} onChange={handleInputChange} onKeyPress={handleInputEnter}/>
      <Button  className={classesB.root} variant="contained" color="primary" onClick={handleSearch}>
        SEARCH
      </Button>
    </form>
    </div>
  );
}

export default BookForm