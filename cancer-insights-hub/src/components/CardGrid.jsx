import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

const CardGrid = (props) => {
  console.log(props);
  const cards = props.cards;
  return (
    <Grid container spacing={5}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.id}>
          <Card className="card">
            <CardActionArea href={card.link}>
              <CardMedia
                component="img"
                alt={card.title}
                height="300"
                image={card.image}
                title={card.title}
              />
              <CardContent className="card-content">
                {" "}
                <Typography gutterBottom variant="h5" component="h2">
                  {" "}
                  {card.title}{" "}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button
              className="card-button"
              href={card.link}
              variant="outlined"
              size="small"
              color="primary"
            >
              Learn More
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
