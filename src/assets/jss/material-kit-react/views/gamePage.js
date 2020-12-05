import { container } from "assets/jss/material-kit-react.js";
import { FilterNone } from "@material-ui/icons";
import { fade } from "@material-ui/core/styles";

const gamePageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "5vh",

    paddingBottom: "500px",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  GamePage: {
    textAlign: "center",
  },
  prompt: {
    margin: "50px",
    color: "#fff",
    fontWeight: "bold",
    display: "inline-block",
    // fontWeight: "400"
  },
  logo: {
    display: "inline-block",
    width: "70%",
    // position: "relative",
    // right: "10px",
  },
  button: {
    padding: "10px 50px",
    borderRadius: "35px",
    backgroundColor: "#00C765",
    border: "none",
    color: "#ffffff",
    fontSize: "20px",
    textAlign: "center",
    /* font-family: Noto Sans, sans-serif; */
    textTransform: "none",
    margin: "10px",
    cursor: "pointer",
    "&:hover": {
      // background: "rgba(0, 0, 0, 0)"
      backgroundColor: "#20E57E",

      // borderColor: "#6b5899",
      cursor: "pointer",
    },
  },
  whiteButton: {
    padding: "10px 50px",
    borderRadius: "35px",
    backgroundColor: "#ffffff",
    border: "none",
    color: "#140B24",
    fontSize: "20px",
    textAlign: "center",
    /* font-family: Noto Sans, sans-serif; */
    textTransform: "none",
    margin: "10px",
    cursor: "pointer",
    "&:hover": {
      // background: "rgba(0, 0, 0, 0)"
      backgroundColor: fade("#FFFFFF", 0.5),

      // borderColor: "#6b5899",
      cursor: "pointer",
    },
  },
};
export default gamePageStyle;
