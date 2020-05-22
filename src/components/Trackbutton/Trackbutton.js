import React from "react";
import { Button } from "@material-ui/core";

class Trackbutton extends React.Component {
  render() {
    return (
      <Button color="primary" border="0" href={this.props.url}>
        {this.props.name}
      </Button>
    );
  }
}

export default Trackbutton;
