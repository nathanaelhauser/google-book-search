import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchContext from '../../utils/SearchContext'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 400
    },
  },
}));

const useButtonStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    },
  },
}));

const BookForm = () => {
  const classes = useStyles();
  const classesB = useButtonStyles()
  const { handleInputChange, handleSearch, book } = useContext(SearchContext)

  const handleInputEnter = event => {
    if (event.key === 'Enter') {
      handleSearch(event)
    }
  }

  return (
    <div className={classes.root && classesB.root} align='center' >
    <form className={classes.root} noValidate autoComplete="off" align='center'>
      <TextField type='text' name='book' id="standard-basic" label="Book Title" value={book} onChange={handleInputChange} onKeyPress={handleInputEnter}/>
      <Button  variant="contained" color="primary" onClick={handleSearch}>
        SEARCH
      </Button>
    </form>
    </div>
  );
}

export default BookForm