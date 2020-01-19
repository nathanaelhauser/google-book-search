import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Box from '@material-ui/core/Box'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
  },
  mediaBox: {
    display: 'flex',
    justifyContent: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const BookCard = props => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.title}
        subheader={props.published}
      />
      <Box className={classes.mediaBox}>
        <img src={props.image} alt={props.title} />
      </Box>
      <CardContent>
        <Typography 
          className={classes.title} 
          color="textSecondary"
          component="h2">
            {props.authors.replace(',', ' • ')}
        </Typography>
        <Typography  
          variant="body2"
          component="p">
            {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" href={props.link} color="primary">View</Button>
        <Button variant="contained" size="small" color="secondary">{props.action}</Button>
      </CardActions>
    </Card>
  )
}

export default BookCard