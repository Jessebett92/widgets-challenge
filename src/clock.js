import React, { Component } from "react";
import moment from "moment";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: 12
    };
  }

  render() {
    return (
      <div>
        <h2>{moment().format("h:mm:ss")}</h2>
      </div>
    );
  }
}

export default Clock;
