import React, { Component } from "react";
import "../assets/styles/homePage.less";
import Header from "../components/Header";
import Banner from "../components/Banner";
export class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        {/* 头部搜索 */}
        <Header></Header>
        {/* 轮播图 */}
        <Banner></Banner>
      </div>
    );
  }
}

export default HomePage;
