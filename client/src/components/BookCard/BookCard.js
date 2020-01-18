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

  const books = {
    title: 'Harry Potter and the Cursed Child – Parts One and Two (Special Rehearsal Edition)',
    authors: [
      "J.K. Rowling",
      "John Tiffany",
      "Jack Thorne"
    ],
    description: 'Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play received its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.',
    image: 'http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    link: 'http://books.google.com/books?id=tcSMCwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=1&source=gbs_api',
    published: '2016-07-31',
    action: 'Delete'
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title={books.title}
        subheader={books.published}
      />
      <CardMedia 
        className={classes.media}
        image={books.image} 
      />
      <CardContent>
        <Typography 
          className={classes.title} 
          color="textPrimary"
          component="h2">
            {books.authors.join('•')}
        </Typography>
        <Typography  
          variant="body2"
          component="p">
            {books.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={books.link}>View</Button>
        <Button size="small">{books.action}</Button>
      </CardActions>
    </Card>
  )
}

export default BookCard