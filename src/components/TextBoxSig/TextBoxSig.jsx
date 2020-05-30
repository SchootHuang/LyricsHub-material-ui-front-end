import React from "react";
//import "./style.css";

class TextBoxSig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Signature Tracks"
    };
  }
  render() {
    return (
      <div className="squareSig">
        <div className="content">{this.state.value}</div>
      </div>
    );
  }
}

export default TextBoxSig;
