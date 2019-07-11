import React, { Component } from "react";

class Colors extends Component {
  constructor() {
    super();
    this.state = {
      color: "Choose a Color!"
    };
  }

  change = () => {
    this.setState({
      color: (this.color = document.getElementById("color-changed-to").value)
    });
  };

  render() {
    return (
      <div>
        <h3 style={{ color: this.state.color }}>{this.state.color}</h3>
        <input type="text" id="color-changed-to" />
        <button onClick={() => this.change()}>Submit</button>
      </div>
    );
  }
}

export default Colors;
