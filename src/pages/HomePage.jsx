import React, { Component } from "react";
import "../assets/styles/homePage.less";
import Header from "../components/Header";
export class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Header></Header>
      </div>
    );
  }
}

export default HomePage;
