import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderSearchBar from "components/HeaderSearchBar/HeaderSearchBar.js";
import Footer from "components/Footer/Footer.js";
import TextBoxSig from "components/TextBoxSig/TextBoxSig.jsx";
import Buttons from "components/Buttons/Buttons.js";

import stylesLogin from "assets/jss/material-kit-react/views/singerPage.js";
// import styles from "assets/jss/material-kit-react/views/components.js";
const styles = makeStyles(stylesLogin);

export default function SingerPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = styles();
  const {
    ...rest
  } = props;
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

        <div className="roundImage">
          {/* <ExampleComponent image={MyPhoto} roundedColor="#66A5CC" imageWidth="300" imageHeight="300" roundedSize="10"/> */}
        </div>

        <TextBoxSig className="rightElems"></TextBoxSig>

        <div className="rightElems">
          <Buttons/>
        </div>
      </div>

      <Footer whiteFont="whiteFont"/>
    </div>
  </div>);
}