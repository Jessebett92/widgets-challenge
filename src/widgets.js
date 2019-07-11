import React, { Component } from "react";

class Widget extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  counter = amt => {
    this.setState({
      count: this.state.count + amt
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.counter(1)}>Add</button>
        <button onClick={() => this.counter(-1)}>Sub</button>
        <p>____________________________________</p>
      </div>
    );
  }
}

export default Widget;
