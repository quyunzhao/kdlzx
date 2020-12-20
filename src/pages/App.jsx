import React from "react";

import ReactDOM from "react-dom";

import { Router, Route, hashHistory } from "react-router";

import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import ListPage from "./ListPage";
import DetailPage from "./DetailPage";

// 定义路由
const appRouter = (
  <Router history={hashHistory}>
    {/* 登录 */}
    <Route path="/" component={LoginPage}></Route>
    {/* 首页 */}
    <Route path="/home" component={HomePage}></Route>
    {/* 列表 */}
    <Route path="/list/:subjectId" component={ListPage}></Route>
    {/* 详情页 */}
    <Route path="/detail" component={DetailPage}></Route>
  </Router>
);

ReactDOM.render(appRouter, document.getElementById("root"));
