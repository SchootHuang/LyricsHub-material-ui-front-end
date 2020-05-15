import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ts_profile from "assets/img/taylor-profile.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody";
import Button from '@material-ui/core/Button'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

let fontTheme = createMuiTheme();
fontTheme = responsiveFontSizes(fontTheme);

const useStyles = makeStyles(theme => ({
  root: {
    height: "auto",
    width: "100%",
    background: "#1C1433",
    color: "#CACACA"
  },
  album: {
    height: 0,
    width: "20%",
    marginLeft: "0",
    marginBottom: "20px"
  },
  album2: {
    height: 0,
    marginLeft: "25%",
    width: "50%",
    //paddingBottom: "-100px"
    //height: "50%",
  },
  album3: {
    height: 'auto',
    marginLeft: "80%",
    width: "20%",
    marginTop: "100px"
    //height: "50%",
  },
  lyrics: {
    marginTop: "-8%",
    maxHeight: "200px", 
    overflow: 'auto'
  },
  media: {
    height: '100%',
    marginTop: "8%",
    width: "100%",
    paddingTop: "100%" // 16:9
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 1,
    marginLeft: "4%"
  },
}));

export default function TrendingLyrics() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };

  return (
    <Card className={classes.root}>
      <CardBody>

        <CardContent className={classes.album}>  
            <CardMedia className={classes.media} image={ts_profile} />
            <CardContent height='auto'>
                <ThemeProvider theme={fontTheme}>
                    <Typography  variant="body1" align="center" width="75%">
                    Taylor Swift
                    </Typography>
                    <Typography  variant="body2" align="center" width="75%">
                    CMBwefewfYN
                    </Typography>
                </ThemeProvider>
            </CardContent>
        </CardContent>
        
        <CardContent className={classes.album2}>  
            <CardContent className={classes.lyrics} >  
            <Typography  align="center" >
                gdyfgg esfgue sef
                fewfgkeu efewf efewf few
                        fewfey fwg uef fejfgek
                        yaddu edgeiwy7de fewfewu few
                        fewugfiuewgu fewuifge efgeiw
                        fewifehoiuef efefef edui widthew
                        fewiufge edeiwhdoewb  dewdwe 
                        fewfgkeu efewf efewf few
                        fewfey fwg uef fejfgek
                        gdyfgg esfgue sef
                        fewfgkeu efewf efewf few
                        fewfey fwg uef fejfgek
                        yaddu edgeiwy7de fewfewu few
                        fewugfiuewgu fewuifge efgeiw
                        hoiuef efefef edui width
                        fewfgkeu efewf efewf few
                        fewfey fwg uef fejfgek
                        yaddu edgeiwy7de fewfewu few
                        fewugfiuewgu fewuifge efgeiw
                        fewifehoiuef efefef edui widthew
                        fewiufge edeiwhdoewb  dewdwe 
                        ewgyfeguwe ewdgyew dewdye
                        gdyfgg esfgue sef
                        fewfgkeu efewf efewf few
                        fewfey fwg uef fejfgek
                        yaddu edgeiwy7de fewfewu few
                        fewugfiuewgu fewuifge efgeiw
                        fewifehoiuef efefef edui w
                        efewf efewf few
                        fewfey fwg uef fejfgek
                       
                        </Typography>
            </CardContent>
        </CardContent>

        <CardContent className={classes.album3}>
         
        <Button variant="contained" color="Green" height='auto'>
        Write songs like this
        </Button>
            
        </CardContent>

      </CardBody>
    </Card>
  );
}
