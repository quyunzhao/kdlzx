import React, { Component } from "react";
import { NavBar, SearchBar } from "antd-mobile/dist/antd-mobile.min";
import Img from "../components/Img";
import "../assets/styles/header.less";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavBar leftContent={[<Img src="logo.png" key="0" height={30}></Img>]}>
          <SearchBar placeholder="Search" maxLength={8} />
        </NavBar>
      </div>
    );
  }
}
