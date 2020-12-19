import React, { Component } from "react";

import "../assets/styles/listPage.less";

import Header from "../components/Header";

export default class ListPage extends Component {
  render() {
    return (
      <div className="list-page">
        {/* 头部组件 */}
        <Header></Header>
      </div>
    );
  }
}
