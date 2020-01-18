import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    minWidth: '80%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

  const { title, authors, description, image, link, published, action } = props.book

  return (
    <Card className={classes.card}>
      <CardHeader
        title={title}
        subheader={published}
      />
      <CardMedia 
        className={classes.media}
        image={image} 
      />
      <CardContent>
        <Typography 
          className={classes.title} 
          color="textPrimary"
          component="h2">
            {authors.join('•')}
        </Typography>
        <Typography  
          variant="body2"
          component="p">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link}>View</Button>
        <Button size="small">{action}</Button>
      </CardActions>
    </Card>
  )
}

export default BookCard