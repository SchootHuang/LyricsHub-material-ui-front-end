import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import './style.css';

// @material-ui/icons

// core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderSearchBar from "components/HeaderSearchBar/HeaderSearchBar.js";
import Footer from "components/Footer/Footer.js";
import TextBoxSig from "components/TextBoxSig/TextBoxSig.jsx";
import Buttons from "components/Buttons/Buttons.js";
import Trackbutton from "components/Trackbutton/Trackbutton.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import List from '@material-ui/core/List';
// import logo_md from "assets/img/lyricshub-md.png";
// import logo_sm from "assets/img/lyricshub-sm.png";

// round component
import ExampleComponent from "react-rounded-image";
// round component img
import MyPhoto from "assets/img/Taylor_Swift.png";
import Trapzoid from "assets/img/trapezoid.png";

import stylesLogin from "assets/jss/material-kit-react/views/singerPage.js";
import db from "../../database.js";
import { ListItem } from "@material-ui/core";


// import styles from "assets/jss/material-kit-react/views/components.js";
const styles = makeStyles(stylesLogin);
const state = {
  songName: "Love story",
  url: "https://material-ui.com/zh/components/buttons/#api"
  };

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
  const {
    ...rest
  } = props;

  //hook before the rendering
  React.useEffect(() => {
    //Change this to actual
    const artistName = "50cent"; //props.location.state.singerName
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
  console.log(artistWork)

  var trackButton = []
  trackButton.push(<ListItem><TextBoxSig/></ListItem>)
  for(var i = 0; i < artistWork.length; i++){
    trackButton.push(
      <ListItem> <Trackbutton name={artistWork[i]} url='' /></ListItem>
     
    )
  }

  return (<div>
    <HeaderSearchBar/>
    <div className={classes.pageHeader} style={{
        backgroundImage: "url(" + MyPhoto + ")", //"linear-gradient(to bottom, #3D1B7C, #191931)",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        height: "100%"
      }}>
                <div className={classes.container}>
          <GridContainer  direction="row" justify="space-between" alignItems="flex-end">
          <GridItem xs={3} sm={3} md={3} lg={3}>
          { <ExampleComponent image={MyPhoto} roundedColor="#66A5CC" imageWidth="500" imageHeight="500" roundedSize="0"/> }
           <img src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607189893927&di=53384907b9d3e34d07db047ae66cd79d&imgtype=0&src=http%3A%2F%2Fac-q.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F111%2F111145520.jpg"
    style={{width: 120, height: 120, position: 'absolute', top: 180, left: 450}} roundedCircle/>
    <img src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607189893927&di=53384907b9d3e34d07db047ae66cd79d&imgtype=0&src=http%3A%2F%2Fac-q.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F111%2F111145520.jpg"
    style={{width: 120, height: 120, position: 'absolute', top: 300, left: 420}} roundedCircle/>
    <img src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607189893927&di=53384907b9d3e34d07db047ae66cd79d&imgtype=0&src=http%3A%2F%2Fac-q.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F111%2F111145520.jpg"
    style={{width: 120, height: 120, position: 'absolute', top: 410, left: 360}} roundedCircle/>
    <img src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607189893927&di=53384907b9d3e34d07db047ae66cd79d&imgtype=0&src=http%3A%2F%2Fac-q.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F111%2F111145520.jpg"
    style={{width: 120, height: 120, position: 'absolute', top: 450, left: 240}} roundedCircle/>
          </GridItem>
          <GridItem xs={3} sm={3} md={3} lg={3}>
          <List dense={true}>{trackButton}</List>
          {/*<Trackbutton name='NAME'url='' />*/}
          <Buttons/>
          {/*trackButton*/}
          </GridItem>
          </GridContainer>
          <Footer whiteFont="whiteFont"/>
        </div> 
      <div className={classes.backgroundOverlap} style={{
          backgroundImage: "url(" + Trapzoid + ")", //"linear-gradient(to bottom, #3D1B7C, #191931)",
        }}>



  </div>
  </div>
  </div>);
}

