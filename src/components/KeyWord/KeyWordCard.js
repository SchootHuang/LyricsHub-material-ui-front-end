import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ts_profile from "assets/img/taylor-profile.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 245,
    width: 200,
    background: "#1C1433",
    color: "#CACACA",
  },
  media: {
    height: 0,
    marginTop:15,
    width:140,
    paddingTop: '100%', // 16:9
  },
}));

export default function KeyWordCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

  return (
    <Card className={classes.root}>
      <CardBody>
        <CardMedia className={classes.media} image={ts_profile} />
      <CardContent>
        <Typography variant="body1" align="center">
            Taylor Swift
        </Typography>
        <Typography variant="body2" align="center">
            CMBYN
        </Typography>
      </CardContent>
      </CardBody>
    </Card>
  );
}