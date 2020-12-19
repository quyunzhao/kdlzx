import React, { Component } from "react";
import ReactDOM from "react-dom";
// import LoginPage from "./LoginPage";
// import HomePage from "./HomePage";
import ListPage from "./ListPage";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <LoginPage></LoginPage> */}
        {/* <HomePage></HomePage> */}
        <ListPage></ListPage>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
