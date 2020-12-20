import React, { Component } from "react";
import { Link } from "react-router";

import "../assets/styles/loginPage.less";

// 引入图片组件
import Img from "../components/Img";

// 引入输入框组件
import FormInput from "../components/FormInput";

// 引入按钮组件
import FormBtn from "../components/FormBtn";
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
          {/* 1.用户名输入框 */}
          <FormInput
            type="text"
            placeholder="用户名"
            iconClass="shouji"
          ></FormInput>
          {/* 2.密码输入框 */}
          <FormInput
            type="password"
            placeholder="密码"
            iconClass="Lock_icon"
          ></FormInput>
          {/* 3.登录按钮 */}
          <Link to="/home">
            <FormBtn isFull={true}>登录</FormBtn>
          </Link>
          {/* 4.忘记密码 */}
          <FormBtn type="ordinary">忘记密码</FormBtn>
          {/* 5.免费注册 游客登录 */}
          <FormBtn>免费注册</FormBtn>
          &emsp;
          <FormBtn>游客登录</FormBtn>
        </form>
      </div>
    );
  }
}

export default LoginPage;
