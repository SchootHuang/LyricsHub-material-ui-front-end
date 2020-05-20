import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ts_profile from "assets/img/taylor-profile.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import background1 from "assets/img/Taylor_Swift.png";

let fontTheme = createMuiTheme();
fontTheme = responsiveFontSizes(fontTheme);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    width: "90%",
    margin: "0 5%",
    "&:hover": {
      border: "2px solid #6b5899",
      height: "405px",
      width: "92%",
      margin: "0 4%",
    },
  },
  rootSelected: {
    height: "410px",
    width: "95%",
    margin: "0 2.5%",
    // border: "3px solid #3d1b7c",
    backgroundColor: fade("#6b5899", 0.75),
    "&:hover": {
      backgroundColor: fade("#6b5899", 0.5),
      // border: "3px solid #ffffff",
    },
  },
  media: {
    height: 0,
    marginTop: "8%",
    width: "97%",
    paddingTop: "100%", // 16:9
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 4,
  },
  lyrics: {
    height: "100%",
    borderRadius: "30px",
    backgroundImage: `url(${background1})`,
    backgroundSize: "cover",
    backgroundColor: fade("#ffffff", 0.2),
    backgroundBlendMode: "lighten",
    "&:hover": {
      backgroundColor: fade("#ffffff", 0.4),
    },
  },
  lyricsSelected: {
    backgroundColor: fade("#ffffff", 0.7),
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: fade("#ffffff", 0.8),
    },
  },
  cardBody: {
    width: "100%",
    alignSelf: "center",
    overflow: "scroll",
  },
}));

export default function GameCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [cardSelected, setCardSelected] = useState(false);

  let content = null;
  if (props.step === 0) {
    content = (
      <CardBody className={classes.cardBody}>
        <CardMedia className={classes.media} image={ts_profile} />
        <CardContent>
          <ThemeProvider theme={fontTheme}>
            <Typography variant="body1" align="center" width="75%">
              {props.singer.name}
            </Typography>
          </ThemeProvider>
        </CardContent>
      </CardBody>
    );
  } else if (props.step === 1) {
    content = (
      <CardBody
        className={
          props.selected
            ? [classes.cardBody, classes.lyrics, classes.lyricsSelected].join(
                " "
              )
            : [classes.cardBody, classes.lyrics].join(" ")
        }
      >
        <p>{props.singer.lyrics[props.index]}</p>
      </CardBody>
    );
  } else {
    content = null;
  }

  const clickHandler = () => {
    setCardSelected(true);
  };

  return (
    <div>
      <Card
        className={props.selected ? classes.rootSelected : classes.root}
        onClick={clickHandler}
      >
        {content}
      </Card>
    </div>
  );
}
