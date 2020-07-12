import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../App.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.imgUrl}
          title="Contemplative Reptile"
        />
        <Typography gutterBottom variant="h5" component="h2">
          {props.titl}
        </Typography>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            By <u>{props.author}</u> on {props.data.slice(0, 10)}
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            {props.conten}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={props.url}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
