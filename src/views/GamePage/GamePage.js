import React, { useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import HeaderSearchBar from "components/HeaderSearchBar/HeaderSearchBar.js";
import { TransitionGroup } from "react-transition-group";

import stylesLogin from "assets/jss/material-kit-react/views/singerPage.js";
import Button from "@material-ui/core/Button";
import GameCard from "components/GameCard/GameCard";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/gamePage.js";
import taylor_profile from "assets/img/taylor.png";
import troye_profile from "assets/img/troye.png";
import ed_profile from "assets/img/ed.png";
import lyricsgameImg from "assets/img/lyricsgame.png";

const singers = [
  // place holder
  {
    name: "Taylor Swift",
    img: taylor_profile,
    lyrics: [
      "Taylor Swift lyrics bla bla bla bla bla bla ......... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla .......... ",
      "some lyrics ...........lyrics .....................lyrics ..............lyrics ....................lyrics ............lyrics ..........lyrics ............................................................................",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    answers: ["Lyri", "You Need to Calm Down", "Love Story"],
    correctAnswer: 0,
  },
  {
    name: "Troye Sivan",
    img: troye_profile,
    lyrics: [
      "Troye Sivan lyrics ... Vestibulum lectus mauris ultrices eros in cursus turpis massa. Nullam ac tortor vitae purus faucibus. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Varius morbi enim nunc faucibus a pellentesque sit amet. Tempus imperdiet nulla malesuada pellentesque. Id aliquet risus feugiat in ante metus dictum. Et tortor at risus viverra adipiscing. Mattis molestie a iaculis at erat pellentesque. Elementum nibh tellus molestie nunc non blandit massa enim nec. Purus gravida quis blandit turpis. Dignissim convallis aenean et tortor at risus viverra adipiscing at. ",
      "some lyrics by Troye Sivan ...........lyrics .....................lyrics ..............lyrics ....................lyrics ............lyrics ..........lyrics ............................................................................",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    answers: ["You Need to Calm Down", "Lyri", "Love Story"],
    correctAnswer: 1,
  },
  {
    name: "Ed Sheeran",
    img: ed_profile,
    lyrics: [
      "Ed Sheeran bla bla bla bla bla bla ......... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla .......... ",
      "some lyrics Turpis cursus in hac habitasse platea. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Et leo duis ut diam quam nulla porttitor. Non nisi est sit amet facilisis magna etiam tempor orci. Sit amet facilisis magna etiam. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Nibh tortor id aliquet lectus proin nibh nisl. Nisl purus in mollis nunc sed id semper risus in. Bibendum at varius vel pharetra. Tristique magna sit amet purus. Cras sed felis eget velit aliquet.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    answers: ["You Need to Calm Down", "Love Story", "Lyri"],
    correctAnswer: 2,
  },
];

const useStyles = makeStyles(styles);

export default function GamePage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [prompt, setPrompt] = useState("1. Choose Your Favorite Artist");
  const [singerSelected, setSingerSelected] = useState(0);
  const [answer, setAnswer] = useState(-1);
  const [correctAnswer, setCorrectAnswer] = useState(singers[0].correctAnswer);
  const [step, setStep] = useState(0);
  const [btnText, setBtnText] = useState("Next");
  const [score, setScore] = useState(0);
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();

  const transitionHandler = () => {
    if (checkSelection() === false && step !== 2) {
      alert("Please select a card!");
      return;
    }

    // setCardSelection([false, false, false]);
    if (step === 0) {
      setPrompt("2. Guess which One is Generated By AI");
      setBtnText("Confirm");
      setStep(step + 1);
      setAnswer(-1);
    } else if (step === 1) {
      setBtnText("Play Again");
      setStep(step + 1);

      if (checkAnswer()) {
        setPrompt("You Got It! This Song is Generated By Lyri.");
      } else {
        setPrompt("Woops! This Song belongs to " + singers[singerSelected]);
      }
    } else {
      setStep(0);
      setBtnText("Next");
      setPrompt("1. Choose Your Favorite Artist");
      setAnswer(-1);
    }
  };

  const cardClickedHandler = (index) => {
    if (step === 0) {
      setSingerSelected(index);
      setCorrectAnswer(singers[index].correctAnswer);
      console.log(correctAnswer);
    }
    if (answer === index) {
      setAnswer(-1);
    } else {
      setAnswer(index);
    }

    // if (cardSelection[index] === true) {
    //   setCardSelection([false, false, false]);
    // } else {
    //   let selection = [false, false, false];
    //   selection[index] = true;
    //   setCardSelection([...selection]);
    // }
  };

  const checkSelection = () => {
    if (answer < 0) {
      return false;
    }
    return true;
    // if (
    //   cardSelection[0] === false &&
    //   cardSelection[1] === false &&
    //   cardSelection[2] === false
    // ) {
    //   return false;
    // }
    // console.log(cardSelection);
    // return true;
  };

  const checkAnswer = () => {
    if (answer === correctAnswer) {
      setScore(score + 10); // place holder
      return true;
    }
    setScore(score - 10);
    return false;
  };

  const shareLyricsHandler = () => {};

  let buttons = (
    <button
      varient="contained"
      onClick={transitionHandler}
      className={classes.button}
    >
      {btnText}
    </button>
  );
  if (step === 2) {
    buttons = (
      <div>
        <button
          varient="contained"
          onClick={transitionHandler}
          className={classes.whiteButton}
        >
          {btnText}
        </button>
        <button
          varient="contained"
          onClick={shareLyricsHandler}
          className={classes.button}
        >
          Share Lyrics
        </button>
      </div>
    );
  }

  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: "linear-gradient(to bottom, #3D1B7C, #191931)",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className={classes.container}>
        <HeaderSearchBar />

        <div
          className={classNames(classes.main, classes.mainRaised)}
          style={{ padding: 0 }}
        >
          <GridContainer>
            <GridItem item="item" xs={1} sm={1} md={3} lg={5} />

            <GridItem item="item" xs={12} sm={12}>
              {/* container for cards */}
              <GridContainer justify="center" alignItems="center" spacing={1}>
                <GridItem xs={9}>
                  <h3 className={classes.prompt}>{prompt}</h3>
                </GridItem>
                <GridItem xs={3}>
                  <img className={classes.logo} src={lyricsgameImg} />
                </GridItem>
                {singers.map((singer, index) => (
                  <GridItem id={index} xs={4} sm={4} md={4} lg={4}>
                    <div onClick={() => cardClickedHandler(index)}>
                      <GameCard
                        index={index}
                        singer={singer}
                        step={step}
                        selected={answer === index}
                        singerSelected={singers[singerSelected]}
                        answer={answer}
                      />
                    </div>
                  </GridItem>
                ))}
              </GridContainer>
            </GridItem>
            <GridItem item="item" xs={1} sm={1} md={3} lg={5} />

            <GridItem
              item="item"
              xs={12}
              sm={12}
              style={{ textAlign: "center" }}
            >
              {buttons}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
