import React, { Component } from "react";

class Peekaboo extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }

  hidden = () => {
    this.setState({
      toggle:
        this.state.toggle === false
          ? (this.toggle = true)
          : (this.toggle = false)
    });
  };

  render() {
    return (
      <div>
        {this.state.toggle ? <h1>PeekaBoo</h1> : null}
        <button onClick={() => this.hidden()}>Toggle</button>
        <p>____________________________________</p>
      </div>
    );
  }
}

export default Peekaboo;
