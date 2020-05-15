import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FaceIcon from '@material-ui/icons/Face';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import show_similar_imgsrc from 'assets/img/show_similar.png';
import auto_create_song_imgsrc from 'assets/img/auto_create_song.png';

const useStyles = makeStyles((theme) => ({
  buttonDark: {
    width: "300px",
    borderRadius: "35px",
    marginLeft: "50px",
    marginRight: "50px",
    backgroundColor: '#3D1B7C',
    borderColor: '#3D1B7C',
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: ['Noto Sans', 'sans-serif'].join(','),
    textTransform: 'none',
    lineHeight: 2.2,
    padding: '6px 12px',
    margin: '10px',
    '&:hover': {
      backgroundColor: '#6B5899',
      borderColor: '#6B5899'
    }
  },
  buttonLight: {
    width: "280px",
    borderRadius: "35px",
    marginLeft: "50px",
    marginRight: "50px",
    backgroundColor: '#FFFFFF',
    borderColor: '#3D1B7C',
    color: '#3D1B7C',
    fontSize: 20,
    fontFamily: ['Noto Sans', 'sans-serif'].join(','),
    textTransform: 'none',
    lineHeight: 2.2,
    padding: '6px 12px',
    margin: '10px',
    '&:hover': {
      backgroundColor: '#c9c6d1',
      borderColor: '#3D1B7C'
    }
  },
  grow: {
    flexGrow: 1
  },
  imageIcon: {
    height: '30px',
    width: "30px",
    margin: "0px 10px"
    // imageWidth: "5px"
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (<div className={classes.grow}>

    <Button varient="outlined" className={classes.buttonLight}>
      <img className={classes.imageIcon} src={show_similar_imgsrc}/>
      Show Similar Artists
    </Button>
    <div className={classes.grow}/>
    <Button varient="contained" className={classes.buttonDark}>

      <img className={classes.imageIcon} src={auto_create_song_imgsrc}/>
      Write Songs Like Hers

    </Button>

  </div>);
}
