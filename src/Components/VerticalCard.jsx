import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
    clipPath: "polygon(0 0, 100% 0, 100% 89%, 0% 100%)",
  },
  content: {
    // background: "linear-gradient(to left top, #19dada, #068181)",
    color: "#fff",
  },
  typos: {
    color: "#000",
  },
});
const TestDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TestCard = styled(Card)`
  max-width: 345px;
  display: none;
  background: linear-gradient(to left top, #19dada, #068181);
  @media screen and (max-width: 600px) {
    display: grid;
    margin-bottom: 25px;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #19dada; */
  }
`;
const VerticalCard = ({ img, title, name }) => {
  const classes = useStyles();
  return (
    <TestDiv>
      <TestCard>
        {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {name} | {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.typos}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            vel.
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </TestCard>
    </TestDiv>
  );
};

export default VerticalCard;
