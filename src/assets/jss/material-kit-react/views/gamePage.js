import { container } from "assets/jss/material-kit-react.js";
const gamePageStyle = {
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
  GamePage: {
    textAlign: "center",
  },
  prompt: {
    margin: "50px",
    color: "#3d1b7c",
    // fontWeight: "400"
  },
  button: {
    padding: "10px 50px",
    borderRadius: "35px",
    backgroundColor: "#3d1b7c",
    borderColor: "#3d1b7c",
    color: "#ffffff",
    fontSize: "20px",
    /* font-family: Noto Sans, sans-serif; */
    textTransform: "none",
    margin: "10px",
    cursor: "pointer",
    "&:hover": {
      // background: "rgba(0, 0, 0, 0)"
      backgroundColor: "#6b5899",
      borderColor: "#6b5899",
      cursor: "pointer",
    },
  },
};
export default gamePageStyle;
