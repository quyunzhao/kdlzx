import React, { Component } from "react";
import { NavBar, SearchBar, Icon } from "antd-mobile/dist/antd-mobile.min";

import Img from "../components/Img";
import "../assets/styles/header.less";

// Header 页面头部
// 属性名 isFooter  类型--布尔值 ----为 true 表示页面尾部
// 属性名 isDetail  类型--布尔值 ----为 true 表示详情页

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* 方法一 */}
        {/* <NavBar
          leftContent={
            this.props.isDetail
              ? ""
              : [
                  this.props.isFooter ? (
                    ""
                  ) : (
                    <Img src="logo.png" key="0" height={30}></Img>
                  ),
                ]
          }
          icon={this.props.isDetail ? <Icon type="left" /> : ""}
          onLeftClick={() => console.log("onLeftClick")}
        >
          {this.props.isDetail ? (
            <Img src="logo.png" height={30} />
          ) : this.props.isFooter ? (
            <div style={{ textAlign: "right", width: "100%" }}>
              <Img src="logo.png" height={30} />
            </div>
          ) : (
            <SearchBar placeholder="Search" maxLength={8} />
          )}
        </NavBar> */}
        {/* -------------------分割线---------------- */}
        {/* 方法二 */}
        {this.props.isDetail ? (
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => window.history.back()}
          >
            <a href="#/home">
              <Img src="logo.png" height={30} />
            </a>
          </NavBar>
        ) : (
          <NavBar
            leftContent={[
              this.props.isFooter ? (
                ""
              ) : (
                <a href="#/home" key="1">
                  <Img src="logo.png" height={30} />
                </a>
              ),
            ]}
            // icon={<Icon type="left" />}
            // onLeftClick={() => console.log("onLeftClick")}
          >
            {this.props.isFooter ? (
              <div style={{ textAlign: "right", width: "100%" }}>
                <a href="#/home">
                  <Img src="logo.png" height={30} />
                </a>
              </div>
            ) : (
              <SearchBar placeholder="Search" maxLength={8} />
            )}
          </NavBar>
        )}
      </div>
    );
  }
}
