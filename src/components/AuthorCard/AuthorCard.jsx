import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './AuthorCard.css'


export default class AuthorCard extends React.Component {
  render() {
    return (
      <div className={'authorCard'}>
        <Card >
          <CardActionArea onClick={() => this.props.onAuthorClick(this.props.authorId)}>
            <CardMedia
              // className={'media'}
             >
               <div className={'media'}></div>
               </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.authorTitle}
              </Typography>
              <Typography  className={'about'} variant="body2" color="textSecondary" component="p">
                {this.props.aboutAuthor}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
  onAuthorClick = () => {

  }
}