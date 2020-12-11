import React, { Component } from "react";
import ReactDOM from "react-dom";
import LoginPage from "./LoginPage";
export default class App extends Component {
  render() {
    return <LoginPage></LoginPage>;
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
