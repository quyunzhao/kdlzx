import React, { Component } from "react";
import "../assets/styles/loginPage.less";
import Img from "../components/Img";

import FormInput from "../components/FormInput";

// const Img = require("../assets/images/logo192.png");
// console.log(Img);
export class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        {/* 1 logo 图片 */}
        <Img src="logo.png"></Img>
        {/* form 表单 */}
        <form action="#" className="login-form">
          {/* 用户名输入框 */}
          <FormInput
            type="text"
            placeholder="用户名"
            iconClass="shouji"
          ></FormInput>
          {/* 密码输入框 */}
          <FormInput
            type="password"
            placeholder="密码"
            iconClass="Lock_icon"
          ></FormInput>
        </form>
      </div>
    );
  }
}

export default LoginPage;
