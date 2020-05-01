import React from "react";
import "./style.css";
import logo_md from "assets/img/lyricshub-md.png";

class MyComponentClass extends React.Component {
  render() {
    return (
      <div id="cv">
        <div class="mainDetails">
          <img class="alb_img" src={this.props.src} alt="Avatar"></img>
          <div class="container">
            <h1>
              <b>{this.props.name}</b>
            </h1>
            <h2>{this.props.song}</h2>
          </div>
        </div>
      </div>
    );
  }
}


export default function KeyWord(props) {

  return (
    <MyComponentClass name='Taylor Swift' song='CNMGB' src={logo_md}></MyComponentClass>
    
  );
}
