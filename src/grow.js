import React, { Component } from "react";

class Grow extends Component {
  constructor() {
    super();
    this.state = {
      fontSize: 20
    };
  }

  growing = amt => {
    this.setState({
      fontSize: this.state.fontSize + amt
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.growing(10)}>Grow</button>
        <button onClick={() => this.growing(-10)}>Shrink</button>
        <p style={{ fontSize: this.state.fontSize + "px" }}>
          {this.state.fontSize}px
        </p>
        <p>____________________________________</p>
      </div>
    );
  }
}

export default Grow;
