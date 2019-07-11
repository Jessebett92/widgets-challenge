import React, { Component } from "react";

class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "Hello"
    };
  }

  handleToggle = () => {
    this.setState({
      greeting:
        this.greeting === "Hello"
          ? (this.greeting = "Goodbye")
          : (this.greeting = "Hello")
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>;
        <button onClick={() => this.handleToggle()}>Toggle</button>
        <p>____________________________________</p>
      </div>
    );
  }
}

export default Greeting;
