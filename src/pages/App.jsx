import React from "react";

import ReactDOM from "react-dom";

import { Router, Route, hashHistory } from "react-router";

import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import ListPage from "./ListPage";
import DetailPage from "./DetailPage";

import { createStore } from "redux";

import { Provider } from "react-redux";

const defaultState = {
  subject_data: [],
};

// 请一个管理员，必须是一个函数
const reduce = (state = defaultState, action) => {
  return state;
};

// 创建一个仓库，把管理员请进来
const store = createStore(reduce);

// 定义路由
const appRouter = (
  <Provider store={store}>
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
  </Provider>
);

ReactDOM.render(appRouter, document.getElementById("root"));
