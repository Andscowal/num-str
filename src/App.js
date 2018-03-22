import React, { Component } from "react";
import converter from "number-to-words";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 525600
    };
  }

  render() {
    return <div>{converter.toWords(this.state.value)} minutes</div>;
  }
}

export default App;
