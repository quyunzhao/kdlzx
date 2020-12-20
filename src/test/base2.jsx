import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";

import { Provider } from "react-redux";

import App2 from "./App2";

const defaultState = {
  num1: 20,
};

// 请一个管理员，必须是一个函数
const reduce = (state = defaultState, action) => {
  if (action.type === "up") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.num1 = action.value;
    return newState;
  }
  return state;
};

// 创建一个仓库，把管理员请进来
const store = createStore(reduce);

const App = (
  // 1. 所有的组件都在 Provider 组件下
  <Provider store={store}>
    <App2></App2>
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
