import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderSearchBar from "components/HeaderSearchBar/HeaderSearchBar.js";
import Footer from "components/Footer/Footer.js";
import TextBoxSig from "components/TextBoxSig/TextBoxSig.jsx";
import Buttons from "components/Buttons/Buttons.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import logo_md from "assets/img/lyricshub-md.png";
// import logo_sm from "assets/img/lyricshub-sm.png";

// round component
import ExampleComponent from "react-rounded-image";
// round component img
import MyPhoto from "assets/img/Taylor_Swift.png";
import Trapzoid from "assets/img/trapezoid.png";

import stylesLogin from "assets/jss/material-kit-react/views/singerPage.js";
import db from "../../database.js";

// import styles from "assets/jss/material-kit-react/views/components.js";
const styles = makeStyles(stylesLogin);

export default function SingerPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  //state for storing similar artiest
  const [similarArtists, setSimilarArtists] = useState([]);
  //state for storing song of this artist
  const [artistWork, setArtistWork] = useState([]);
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = styles();
  const { ...rest } = props;

  //use hook to automatically run before rendering the page
  React.useEffect(() => {
    //Change this to actual
    const artistName = "50cent";
    //starting firebase connection
    const firebaseRef = db.database().ref("artists/" + artistName);
    firebaseRef.on("value", (snap) => {
      //interpret the returned value
      var returnedValue = JSON.stringify(snap.val(), null, 3);
      //slice the returned string into array
      var obj = returnedValue
        .replace("r,kelly", "r.kelly")
        .replace("{", "")
        .replace("}", "")
        .replace("\n", "")
        .trim()
        .split(",");
      //Set the state into current object
      setSimilarArtists(obj);
    });

    const firebaseSongsRef = db.database().ref("songs");
    firebaseSongsRef
      .orderByChild("artist")
      .equalTo(artistName)
      .on("value", function(snapshot) {
        var returned_songs = [];
        snapshot.forEach(function(data) {
          returned_songs.push(data.val().title);
        });
        // Shuffle array, randomly choose 10 songs
        let selected = returned_songs
          .sort(() => 0.5 - Math.random())
          .slice(0, 10);
        //update search to state
        setArtistWork(selected);
      });
  }, []);
  //alert for debug usage
  //console.log(similarArtists);
  //console.log(artistWork);

  return (
    <div>
      <HeaderSearchBar />

      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + MyPhoto + ")", //"linear-gradient(to bottom, #3D1B7C, #191931)",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div
          className={classes.backgroundOverlap}
          style={{
            backgroundImage: "url(" + Trapzoid + ")", //"linear-gradient(to bottom, #3D1B7C, #191931)",
          }}
        >
          <GridContainer>
            <GridItem item="item" xs={12} sm={12}>
              <GridContainer justify="center" alignItems="center" spacing={1}>
                <GridItem xs={6} sm={6} md={6} lg={6}>
                  <div className={classes.round}>
                    {
                      <ExampleComponent
                        image={MyPhoto}
                        roundedColor="#66A5CC"
                        // imageWidth="700"
                        // imageHeight="700"
                        roundedSize="0"
                      />
                    }
                  </div>
                </GridItem>
                <GridItem xs={6} sm={6} md={6} lg={6}>
                  <TextBoxSig />
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem item="item" xs={12} sm={12}>
              <GridContainer justify="center" alignItems="center" spacing={1}>
                <GridItem xs={6} sm={6} md={6} lg={6}></GridItem>
                <GridItem xs={6} sm={6} md={6} lg={6}>
                  <Buttons />
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont={classes.rightElems} />
      </div>
    </div>
  );
}

//<ThemeProvider theme={theme}> </ThemeProvider>
