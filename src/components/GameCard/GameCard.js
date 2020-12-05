import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import ExampleComponent from "react-rounded-image";
import background1 from "assets/img/user.png";
import lyriImg from "assets/img/lyri.png";

let fontTheme = createMuiTheme();
fontTheme = responsiveFontSizes(fontTheme);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    width: "90%",
    margin: "0 5%",
    backgroundColor: "#140B24",
    // color: "#fff",
    "&:hover": {
      backgroundColor: "#2B1E47",
      height: "405px",
      width: "92%",
      margin: "0 4%",
    },
  },
  rootSelected: {
    height: "420px",
    width: "95%",
    margin: "0 2.5%",
    // border: "3px solid #3d1b7c",
    backgroundColor: "#140B24",
    // color: "#fff",
    border: "3px solid #6b5899",
    "&:hover": {
      backgroundColor: "#2B1E47",
      // border: "3px solid #ffffff",
    },
  },
  media: {
    height: 0,
    marginTop: "8%",
    width: "97%",
    paddingTop: "100%", // 16:9
    margin: "0 auto",
    borderRadius: "100%",
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
    backgroundSize: "100% 100%",
    backgroundColor: fade("#000", 0.3),
    backgroundBlendMode: "darken",
    "&:hover": {
      backgroundColor: fade("#000", 0.3),
    },
  },
  lyricsSelected: {
    // backgroundColor: fade("#000", 0.3),
    // backgroundBlendMode: "darken",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: fade("#000", 0.2),
    },
  },
  cardBody: {
    width: "100%",
    alignSelf: "center",
    overflow: "scroll",
  },
  userAnswer: {
    height: "480px",
    width: "98%",
    margin: "0 2.5%",
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
        {/* <ExampleComponent
          className={classes.media}
          image={ts_profile}
          roundedColor="#66A5CC"
          imageWidth="200"
          imageHeight="200"
          roundedSize="0"
        /> */}
        <CardMedia className={classes.media} image={props.singer.img} />
        <CardContent>
          <ThemeProvider theme={fontTheme}>
            <Typography
              style={{ color: "#fff" }}
              variant="body1"
              align="center"
              width="75%"
            >
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
        <p style={{ color: "#00C765" }}>
          {props.singerSelected.lyrics[props.index]}
        </p>
      </CardBody>
    );
  } else {
    let picture = props.singerSelected.img;
    let singerName = props.singerSelected.name;
    let songName = props.singerSelected.answers[props.index];
    if (props.singerSelected.correctAnswer === props.index) {
      picture = lyriImg;
      singerName = "Lyri";
    }
    console.log(props.answer);

    content = (
      <CardBody
        className={
          props.answer === props.index
            ? classes.cardBody
            : [classes.cardBody, classes.userAnswer].join(" ")
        }
      >
        <CardMedia className={classes.media} image={picture} />
        <CardContent>
          <ThemeProvider theme={fontTheme}>
            <Typography
              style={{ color: "#fff" }}
              variant="body1"
              align="center"
              width="75%"
            >
              {singerName}
            </Typography>
            <Typography
              style={{ color: "#fff" }}
              variant="body2"
              align="center"
              width="75%"
            >
              {songName}
            </Typography>
          </ThemeProvider>
        </CardContent>
      </CardBody>
    );
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
