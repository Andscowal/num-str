import React, { Component } from "react";
import converter from "number-to-words";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  componentWillMount() {
    this.baseState = this.state;
  }

  newNum = () => {
    this.setState({ value: this.state.value + 1 });
  };

  oldNum = () => {
    this.setState(this.baseState);
  };

  render() {
    return (
      <div>
        <button onClick={this.newNum}>Add a minute!</button>
        {converter.toWords(this.state.value)} minutes
        <button onClick={this.oldNum}>Reset to zero!</button>
      </div>
    );
  }
}

export default App;
