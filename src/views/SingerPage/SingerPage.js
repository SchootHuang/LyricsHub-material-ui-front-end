import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderSingerPage from "components/HeaderSingerPage/HeaderSingerPage.js";
import Footer from "components/Footer/Footer.js";
import TextBoxSig from "components/TextBoxSig/TextBoxSig.jsx";
import Buttons from "components/Buttons/Buttons.js";
// import logo_md from "assets/img/lyricshub-md.png";
// import logo_sm from "assets/img/lyricshub-sm.png";

// round component
import ExampleComponent from "react-rounded-image";
// round component img
import MyPhoto from "assets/img/Taylor_Swift.png";
import Trapzoid from "assets/img/trapezoid.png";

import stylesLogin from "assets/jss/material-kit-react/views/singerPage.js";
import db from '../../database.js';

// import styles from "assets/jss/material-kit-react/views/components.js";
const styles = makeStyles(stylesLogin);

export default function SingerPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  //state for storing similar artiest
  const [similarArtists, setSimilarArtists] = useState([]);
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = styles();
  const {
    ...rest
  } = props;

  React.useEffect(() =>{
    //Change this to actual 
    const artistName = '50cent';
    //starting firebase connection
    const firebaseRef = db.database().ref("artists/" + artistName)
    firebaseRef.on("value", snap => {
      //interpret the returned value
      var returnedValue = JSON.stringify(snap.val(), null, 3);
      //slice the returned string into array
      var obj = returnedValue.replace('r,kelly','r.kelly').replace('{','').replace('}','').replace('\n','').trim.split(',');
      //Set the state into current object
      setSimilarArtists(obj);
    });
  }, [])
  //alert for debug usage
  console.log(similarArtists);
  
  


  return (<div>
    <HeaderSingerPage/>
    
    <div className={classes.pageHeader} style={{
        backgroundImage: "url(" + MyPhoto + ")", //"linear-gradient(to bottom, #3D1B7C, #191931)",
        backgroundSize: "cover",
        backgroundPosition: "top center"
      }}>
      
      <div className={classes.backgroundOverlap} style={{
          backgroundImage: "url(" + Trapzoid + ")", //"linear-gradient(to bottom, #3D1B7C, #191931)",
        }}>
        <div className={classes.round}>
          { <ExampleComponent image={MyPhoto} roundedColor="#66A5CC" imageWidth="700" imageHeight="700" roundedSize="0"/> }
        </div>
        <div className="rightElems">
          <TextBoxSig/>
        </div>
        <div className="rightElems">
          <Buttons/>
        </div>
        </div>
          <Footer whiteFont="whiteFont"/>
        </div>
  </div>);
}

//<ThemeProvider theme={theme}> </ThemeProvider>