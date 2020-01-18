import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

  return (
    <div className={classes.root} align='center' >
    <form className={classes.root} noValidate autoComplete="off" align='center'>
      <TextField id="standard-basic" label="Book Title" />
      <Button variant="contained" color="primary">
        SEARCH
      </Button>
    </form>
    </div>
  );
}

export default BookForm