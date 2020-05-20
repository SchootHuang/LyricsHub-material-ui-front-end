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

const singers = [
  // place holder
  {
    name: "Taylor Swift",
    lyrics:
      "some lyrics bla bla bla bla bla bla ......... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla ....... bla bla bla bla .......... ",
  },
  {
    name: "Singer Name 2",
    lyrics:
      "some lyrics ...........lyrics .....................lyrics ..............lyrics ....................lyrics ............lyrics ..........lyrics ............................................................................",
  },
  {
    name: "Singer Name 3",
    lyrics:
      "some lyrics ......(:......?...!.....  :) ...........(:......?...!.....  :) ...........(:......?...!.....  :) ...........(:......?...!.....  :) ...........(:......?...!.....  :) ...........(:......?...!.....  :) ...........(:......?...!.....  :) ...........(:......?...!.....  :) ...........(:......?...!.....  :) ...........(:......?...!.....  :) ...........(:......?...!.....  :) ...........(:......?...!.....  :) ............",
  },
];

const useStyles = makeStyles(styles);

export default function GamePage(props) {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [prompt, setPrompt] = useState("Who is your favorite singer?");
  const [cardSelection, setCardSelection] = useState([false, false, false]);
  const [step, setStep] = useState(0);
  const [btnText, setBtnText] = useState("Next");
  const [answerCorrectness, setAnswerCorrectness] = useState(false);
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();

  const transitionHandler = () => {
    if (checkSelection() === false && step !== 2) {
      alert("Please select a card!");
      return;
    }
    setCardSelection([false, false, false]);
    if (step === 0) {
      setPrompt("Guess which Lyrics is AI generated?");
      setBtnText("Submit");
      setStep(step + 1);
    } else if (step === 1) {
      setBtnText("Restart");
      setStep(step + 1);
      if (answerCorrectness) {
        setPrompt("Correct!");
      } else {
        setPrompt("Wrong Choice!");
      }
    } else {
      setStep(0);
      setBtnText("Next");
      setPrompt("Who is your favorite singer?");
    }
  };

  const cardClickedHandler = (index) => {
    if (cardSelection[index] === true) {
      setCardSelection([false, false, false]);
    } else {
      let selection = [false, false, false];
      selection[index] = true;
      setCardSelection([...selection]);
    }
  };

  const checkSelection = () => {
    if (
      cardSelection[0] === false &&
      cardSelection[1] === false &&
      cardSelection[2] === false
    ) {
      return false;
    }
    console.log(cardSelection);
    return true;
  };

  return (
    <div className={classes.GamePage}>
      <HeaderSearchBar />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer>
          <GridItem item="item" xs={1} sm={1} md={3} lg={5} />

          <GridItem item="item" xs={12} sm={12}>
            {/* container for cards */}
            <GridContainer justify="center" alignItems="center" spacing={1}>
              <GridItem xs={12}>
                <h3 className={classes.prompt}>{prompt}</h3>
              </GridItem>
              {singers.map((singer, index) => (
                <GridItem xs={4} sm={4} md={4} lg={4}>
                  <div onClick={() => cardClickedHandler(index)}>
                    <GameCard
                      singer={singer}
                      step={step}
                      selected={cardSelection[index]}
                    />
                  </div>
                </GridItem>
              ))}
            </GridContainer>
          </GridItem>
          <GridItem item="item" xs={1} sm={1} md={3} lg={5} />

          <GridItem item="item" xs={12} sm={12}>
            <button
              varient="contained"
              onClick={transitionHandler}
              className={classes.button}
            >
              {btnText}
            </button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
