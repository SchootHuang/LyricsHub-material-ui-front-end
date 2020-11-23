import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import SearchBar from "components/SearchBar/SearchBar";
import logo_imgsrc from "assets/img/lyricshub.png";
import Paper from "@material-ui/core/Paper";
// import logoSrc from "../../assets/logo.svg"  Fixme: logo src needed HERE
//
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },

  grow: {
    flexGrow: 1,
  },

  search: {
    position: "relative",
    left: "10%",
    borderRadius: "35px",
    backgroundColor: fade("#FFFFFF", 0.5),
    color: "#FFFFFF",

    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#3D1B7C",
    },

    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(5),
    height: "30px",
    width: "auto",
    // alignContent: "center",
  },

  searchBtn: {
    position: "inherit",
    right: "0px",
    bottom: "5px",
    padding: 10,
  },

  inputRoot: {
    color: "inherit",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    paddingRight: `calc(${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    width: "150px",
    position: "inherit",
    bottom: "4.8px",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
  },
  logo: {
    height: "35px",
    margin: "5px 10px 12px",
    overflow: "hidden",
  },
}));

//
// const styles = {
//
//   toolbarMargin: {
//     ...theme.mixins.toolbar,
//   },
//
//   grow: {
//     flexGrow: 1,
//   },
//
//   search: {
//     position: "relative",
//     left: "10%",
//     borderRadius: "35px",
//     backgroundColor: fade("#FFFFFF", 0.15),
//     "&:hover": {
//       backgroundColor: fade("#FFFFFF", 0.25),
//     },
//      marginRight: theme.spacing(2),
//      marginLeft: theme.spacing(5),
//     height: "35px",
//     width: "auto",
//   },
//
//   searchBtn: {
//     position: "relative",
//     right: "0px",
//     bottom: "3.5px",
//   },
//
//   inputRoot: {
//     color: "inherit",
//   },
//
//   inputInput: {
//      padding: theme.spacing(1, 1, 1, 0),
//       padding: "10px 10px 10px 0",
//      vertical padding + font size from searchIcon
//     paddingLeft: "20px",
//     paddingRight: "10px",
//      transition: theme.transitions.create("width"),
//     width: "150px",
//     position: "relative",
//      bottom: "3px",
//      [theme.breakpoints.up("md")]: {
//        width: "400px",
//      },
//   },
// };
//
// const useStyles = makeStyles(styles);

export default function HeaderSingerPage() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        style={{
          background: "#3D1B7C",
        }}
      >
        <Toolbar>
          <IconButton color="inherit">
            <ArrowBackIcon fontSize="large" />
          </IconButton>

          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{
                "aria-label": "search",
              }}
            />
            <IconButton color="inherit" className={classes.searchBtn}>
              <Badge color="secondary">
                <SearchIcon />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.grow} />
          <img alt="Logo" className={classes.logo} src={logo_imgsrc} />
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </div>
  );
}
