import React, { Component } from "react";
import "../assets/styles/homePage.less";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Subject from "../components/Subject";
export class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        {/* 头部搜索 */}
        <Header></Header>
        {/* 轮播图 */}
        <Banner></Banner>
        {/* 学科导航 */}
        <Subject></Subject>
      </div>
    );
  }
}

export default HomePage;
