import React, { Component } from "react";

class Align extends Component {
  constructor() {
    super();
    this.state = {
      alignText: "center"
    };
  }

  adjustment = align => {
    this.setState({
      alignText: (this.alignText = align)
    });
  };

  render() {
    return (
      <div>
        <h2 style={{ textAlign: this.state.alignText }}>Align Me</h2>
        <button onClick={() => this.adjustment("left")}>Left</button>
        <button onClick={() => this.adjustment("center")}>Center</button>
        <button onClick={() => this.adjustment("right")}>Right</button>
      </div>
    );
  }
}

export default Align;
