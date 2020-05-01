import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SearchBar from "components/SearchBar/SearchBar.js";
import KeyWordCard from "components/KeyWord/KeyWordCard.js";

import logo_lg from "assets/img/lyricshub-lg.png";
// import logo_md from "assets/img/lyricshub-md.png";
// import logo_sm from "assets/img/lyricshub-sm.png";


import styles from "assets/jss/material-kit-react/views/loginPage.js";
// import styles from "assets/jss/material-kit-react/views/components.js";
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="LyricsHub"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "linear-gradient(to bottom, #3D1B7C, #191931)",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center" alignItems="center">
            <GridItem item xs={1} sm={2}/>
            <GridItem xs={6} sm={6} md={6} lg={7}>
              <img src={logo_lg} width="100%" height="100%"/>
            </GridItem>
            <GridItem item xs={1} sm={2}/>

            <GridItem xs={9} sm={8} md={9} lg={9}>
              <SearchBar></SearchBar>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer>
              <GridItem item xs={1} sm={1} md={3} lg={5}/>

              <GridItem item xs={12} sm={13}>
                {/* container for keywords */}
                <GridContainer justify="center" alignItems="center" spacing={1}>
                  <GridItem xs={12}>
                    <div className={classes.title}>
                      <h3>Today's KeyWord</h3>
                      <h5>Love</h5>
                    </div>
                  </GridItem>

                  <GridItem xs={3} sm={3} md={3} lg={3}>
                    <KeyWordCard></KeyWordCard>
                  </GridItem>
                  <GridItem xs={3} sm={3} md={3} lg={3}>
                    <KeyWordCard></KeyWordCard>
                  </GridItem>
                  <GridItem xs={3} sm={3} md={3} lg={3}>
                    <KeyWordCard></KeyWordCard>
                  </GridItem>
                  <GridItem xs={3} sm={3} md={3} lg={3}>
                    <KeyWordCard></KeyWordCard>
                  </GridItem>

                </GridContainer>
              </GridItem>

              <GridItem item xs={1} sm={1} md={3} lg={5}/>

            </GridContainer>
          </div>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
