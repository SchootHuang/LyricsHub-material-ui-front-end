import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import TextBoxSig from "components/TextBoxSig/TextBoxSig.jsx";
import Buttons from "components/Buttons/Buttons.js";
// import logo_md from "assets/img/lyricshub-md.png";
// import logo_sm from "assets/img/lyricshub-sm.png";

// round component
//import ExampleComponent from "react-rounded-image";
// round component img
import MyPhoto from "assets/img/Taylor_Swift.png";

import stylesLogin from "assets/jss/material-kit-react/views/singerPage.js";
// import styles from "assets/jss/material-kit-react/views/components.js";
const styles = makeStyles(stylesLogin);

export default function SingerPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = styles();
  const { ...rest } = props;
  return (
    <div>
      {/* <Header
        absolute
        color="transparent"
        brand="LyricsHub"
        rightLinks={<HeaderLinks />}
        {...rest}
      /> */}
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: {MyPhoto},//"linear-gradient(to bottom, #3D1B7C, #191931)",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className="cover">
          <div className="roundImage">
            {/* <ExampleComponent image={MyPhoto} roundedColor="#66A5CC" imageWidth="300" imageHeight="300" roundedSize="10"/> */}
          </div>

          <TextBoxSig className="rightElems"></TextBoxSig>

          <div className="rightElems">
            <Buttons />
          </div>
        </div>

        <Footer whiteFont />
      </div>
    </div>
  );
}

//<ThemeProvider theme={theme}> </ThemeProvider>
