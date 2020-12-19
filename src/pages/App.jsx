import React, { Component } from "react";
import ReactDOM from "react-dom";
// import LoginPage from "./LoginPage";
// import HomePage from "./HomePage";
// import ListPage from "./ListPage";
import DetailPage from "./DetailPage";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <LoginPage></LoginPage> */}
        {/* <HomePage></HomePage> */}
        {/* <ListPage></ListPage> */}
        <DetailPage></DetailPage>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
