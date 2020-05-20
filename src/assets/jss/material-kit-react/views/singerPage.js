import { container } from "assets/jss/material-kit-react.js";

const singerPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF",
    paddingBottom: "200px",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0)",
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  },
  form: {
    margin: "0",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px",
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0",
  },
  inputIconsColor: {
    color: "#495057",
  },

  // added stuff
  backgroundOverlap: {
    // position: "fixed",
    // top: "0",
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: "45%",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    // height: "100%",
    // backgroundSize: "cover",
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("./utils/background.png")',
    //zIndex: "bottom"
  },

  cover: {
    // position: "fixed",
    // top: "0",
    // width: "100%",
    // backgroundPosition: "center",
    // backgroundRepeat: "repeat",
    // height: "100%",
    // backgroundSize: "cover",
    // backgroundImage:
    //   'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("./utils/background.png")',
    // zIndex: "bottom"
  },
  coverTrap: {
    position: "fixed",
    top: "0",
    width: "100%",
    height: "100%",
  },
  square: {
    position: "relative",
    left: "650px",
    top: "50px",
    border: "1px solid transparent",
    padding: "40px",
    textAlign: "start",
    width: "300px",
    height: "500px",
    borderStyle: "ridge",
    margin: "10%",
  },
  squareSig: {
    position: "absolute",
    right: "0px",
    top: "0px",
    border: "1px solid transparent",
    padding: "40px",
    textAlign: "start",
    width: "400px",
    height: "500px",
    borderStyle: "ridge",
    margin: "10%",
  },
  content: {
    fontSize: "2em",
    fontFamily: "'Noto Sans SC', sans-serif",
    color: "black",
    float: "right",
  },
  round: {
    // position: "absolute",
    margin: "0 20%",
    width: "100%",
  },
  rightElems: {
    position: "inherit",
    right: "30px",
  },
};

export default singerPageStyle;
