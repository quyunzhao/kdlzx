import React, { Component } from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";

import { Provider } from "react-redux";

import App1 from "./App1";

const defaultState = {
  num1: 20,
};

// 请一个管理员，必须是一个函数
const reduce = (state = defaultState, action) => {
  return state;
};

// 创建一个仓库，把管理员请进来
const store = createStore(reduce);

const App = (
  // 1. 所有的组件都在 Provider 组件下
  <Provider store={store}>
    <App1></App1>
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
