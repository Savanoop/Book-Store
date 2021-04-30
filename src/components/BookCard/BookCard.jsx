import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './BookCard.css'
import CardActions from '@material-ui/core/CardActions';


export default class BookCard extends React.Component {

  render() {
    return (
      <span>
        <Card className={"root"}>
          <CardActionArea>
            <CardMedia
              className={'media'}
              image={this.props.img}
              title={this.props.name}
              src={this.props.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.description}
              </Typography>
              <div className={'footer'}>
                Price: {this.props.price}
              </div>
              <div className={'footer'}>
                {this.props.publishYear}
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </span>
    );
  }
}