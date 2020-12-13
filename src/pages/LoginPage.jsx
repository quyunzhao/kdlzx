import React, { Component } from "react";
import "../assets/styles/loginPage.less";
import LogoImg from "../assets/images/logo192.png";
export class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        {/* 1 logo 图片 */}
        <img src={LogoImg} alt="" />
        {/* form 表单 */}
      </div>
    );
  }
}

export default LoginPage;
