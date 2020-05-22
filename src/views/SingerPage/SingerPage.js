import React from "react";
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
        backgroundPosition: "top center",
        height: "100%"
      }}>
                <div className={classes.container}>
          <GridContainer  direction="row" justify="space-between" alignItems="flex-end">
          <GridItem xs={3} sm={3} md={3} lg={3}>
          { <ExampleComponent image={MyPhoto} roundedColor="#66A5CC" imageWidth="500" imageHeight="500" roundedSize="0"/> }
          </GridItem>
          <GridItem xs={3} sm={3} md={3} lg={3}>
          <TextBoxSig/>
          <Buttons/>
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

