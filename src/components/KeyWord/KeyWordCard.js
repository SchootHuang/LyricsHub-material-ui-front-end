import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ts_profile from "assets/img/taylor-profile.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody";
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

let fontTheme = createMuiTheme();
fontTheme = responsiveFontSizes(fontTheme);

const useStyles = makeStyles(theme => ({
  root: {
    height: "auto",
    width: "95%",
    background: "#1C1433",
    color: "#CACACA"
  },
  media: {
    height: 0,
    marginTop: "8%",
    width: "97%",
    paddingTop: "100%" // 16:9
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 4,
  },
}));

export default function KeyWordCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };

  return (
    <Card className={classes.root}>
      <CardBody>
        <CardMedia className={classes.media} image={ts_profile} />
        <CardContent>
          <ThemeProvider theme={fontTheme}>
            <Typography variant="body1" align="center">
              Taylor Swift
            </Typography>
            <Typography variant="body2" align="center">
              CMBYN
            </Typography>
          </ThemeProvider>
        </CardContent>
      </CardBody>
    </Card>
  );
}
